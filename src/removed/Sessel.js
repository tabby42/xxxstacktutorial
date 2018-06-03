class Sessel {
  constructor(color) {
    this.color = color;
  }

  info() {
    return `I'm a ${this.color} chair.`;
  }
}

// module.exports = Sessel;
export default Sessel;
