// interface IShape {
// 	name: string
// 	getValue(): string
// }

// function ChangeShape(constructor: Function) {
// 	constructor.prototype.name = 'Changed Shape'
// }

// @ChangeShape
// class Circle implements IShape {
// 	constructor(public name: string = 'Created Circle') {}

// 	public getValue(): string {
// 		return `Circle: ${this.name}`
// 	}
// }

// const circle1 = new Circle('Circle 1')

// console.log(circle1) // Circle { name: 'Created Circle' } // chunki biza prototype ga o'zgartirish kiritganmiz property ga emas.
