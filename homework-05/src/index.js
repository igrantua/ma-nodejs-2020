/* eslint-disable no-restricted-syntax */
const path = require('path');
const fsp = require('fs').promises;
const zlib = require('zlib');
const { URL } = require('url');
const { promisify } = require('util');

const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);

const inputDirName = 'input';
const outputDirName = 'output';
const outputFileName = 'result.json.gz';

const inputDir = path.join(process.cwd(), inputDirName);
const outputFile = path.join(process.cwd(), outputDirName, outputFileName);

async function getInputFileList() {
  let files;
  try {
    files = await fsp.readdir(inputDirName);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Cannot get list of files from '${inputDirName}'`);
  }
  return files.map((file) => path.join(inputDir, file));
}

async function getObjectFromFile(filePath) {
  let compressedBuffer;
  try {
    compressedBuffer = await fsp.readFile(filePath);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Cannot read file '${filePath}'`);
  }
  let jsonBuffer;
  try {
    jsonBuffer = await gunzip(compressedBuffer);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Cannot extract file from '${compressedBuffer}'`);
  }
  let object;
  let json;
  try {
    json = jsonBuffer.toString();
    object = JSON.parse(json);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Cannot parse file '${json}'`);
  }
  return object;
}

function rebuildUrl(originalUrl) {
  const myURL = new URL(originalUrl);
  const { pathname } = myURL;
  const fileType = path.extname(pathname);
  const deviceType = path.basename(pathname, fileType);
  myURL.protocol = 'https';
  myURL.pathname = '/devices';
  myURL.search = `?file=${deviceType}&type=${fileType}`;
  return myURL;
}

async function buildOutputObject(files) {
  const result = {};
  for (const file of files) {
    let object;
    try {
      // eslint-disable-next-line no-await-in-loop
      object = await getObjectFromFile(file);
    } catch (error) {
      console.error(error.message);
      throw new Error(`Cannot get object from '${file}'`);
    }
    object.url = rebuildUrl(object.url);
    const name = path.basename(file.toLowerCase(), '.json.gz');
    result[name] = object;
  }
  return result;
}

async function saveOutput(object) {
  const stringifiedObject = JSON.stringify(object);
  const buffer = Buffer.from(stringifiedObject);
  let compressedBuffer;
  try {
    compressedBuffer = await gzip(buffer);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Cannot compress '${buffer}'`);
  }
  try {
    await fsp.writeFile(outputFile, compressedBuffer);
  } catch (error) {
    console.error(error.message);
    throw new Error(`Cannot write to '${outputFile}'`);
  }
}

async function start() {
  const inputFiles = await getInputFileList();
  const outputObject = await buildOutputObject(inputFiles);
  await saveOutput(outputObject);
}

start().catch((err) => console.error('🐞  🤪  🐛\n', err));
