// @flow

class Sessel {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  info() {
    return `I'm a ${this.color} chair.`;
  }
}

// module.exports = Sessel;
export default Sessel;
