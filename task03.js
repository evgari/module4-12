'use strict';

const rectangle = {
  width: 5,
  height: 5,
  set sideA(val) {
    if (typeof val === 'number') {
      this.width = val;
    }
  },
  set sideB(val) {
    if (typeof val === 'number') {
      this.height = val;
    }
  },
  get rectangleP() {
    return `Периметр прямоугольника: ${2 * (this.width + this.height)} см`;
  },
  get rectangleS() {
    return `Площадь пряоугольника: ${this.width * this.height} см²`;
  },
};

rectangle.sideA = 10;
rectangle.sideB = 6;
rectangle.sideB = '5';
console.log(rectangle);
console.log(rectangle.rectangleP);
console.log(rectangle.rectangleS);
