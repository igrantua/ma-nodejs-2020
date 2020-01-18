const os = require('os');

const totalMemory = os.totalmem() / 1024 / 1024;
const freeMemory = os.freemem() / 1024 / 1024;
const usedMemory = totalMemory - freeMemory;

let minMemoryLimit;

const memoryMsg =
  freeMemory < minMemoryLimit ? 'Available memory is under the defined limit' : 'OK';

function isNotAuthUser(res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 401;
  res.end(
    JSON.stringify({
      message: `Unauthorized`,
    }),
  );
}

function postLimit(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const newLimit = Number(req.queryParams.limit);
  if (Number.isInteger(newLimit) && newLimit >= 0) {
    minMemoryLimit = newLimit;
    // console.log(minMemoryLimit);
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: `Minimum free memory limit is successfully set to ${minMemoryLimit} MB`,
      }),
    );
  } else {
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        message: `New value for minimum free memory limit is not valid number`,
      }),
    );
  }
}

function getMetricsAll(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: memoryMsg,
      total: totalMemory.toFixed(3),
      free: freeMemory.toFixed(3),
      allocated: usedMemory.toFixed(3),
    }),
  );
}

function getMetricsTotal(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: 'OK',
      total: totalMemory.toFixed(3),
    }),
  );
}

function getMetricsFree(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: memoryMsg,
      free: freeMemory.toFixed(3),
    }),
  );
}

function getMetricsAllocated(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: 'OK',
      allocated: usedMemory.toFixed(3),
    }),
  );
}

function getInvalidFilter(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 400;
  res.end(
    JSON.stringify({
      message: 'Filter value is not valid',
    }),
  );
}

function getInternalError(res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 500;
  res.end(
    JSON.stringify({
      message: 'Internal error occurred',
    }),
  );
}

module.exports = {
  isNotAuthUser,
  postLimit,
  getMetricsAll,
  getMetricsTotal,
  getMetricsFree,
  getMetricsAllocated,
  getInvalidFilter,
  getInternalError,
};
