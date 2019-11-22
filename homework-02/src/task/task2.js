class Earth {
  constructor(name, diameter) {
    this.name = name;
    this.diameter = diameter;
    this.volume = (4 / 3) * Math.PI * (diameter / 2) ** 3;
    this.info = function about() {
      return `Planet ${this.name} has a volume of ${this.volume.toFixed(2)}.`;
    };
  }
}

module.exports = new Earth('Earth', 6779);
