class Planet {
  constructor (name, diameter) {
    this.name = name;
    this.diameter = diameter;
    this.volume = (4/3) * Math.PI * Math.pow(diameter/2, 3);
    this.info = function() {
    console.log('Planet ' + this.name + ' has a volume of ' + this.volume.toFixed(2)  + '.');
  }
  }
}

class Earth extends Planet {
}

let Mars = new Earth("Mars", 6779);
Mars.info()