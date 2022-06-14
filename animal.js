class animal {
  name;
  type;
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  getType() {
    return this.type;
  }
  setName(name) {
    this.name = name;
  }
  setType(type) {
    this.type = type;
  }
}

module.exports = animal;
