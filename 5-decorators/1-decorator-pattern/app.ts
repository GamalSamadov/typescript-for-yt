// experimentalDecorators: true ==> enable decorators support

// interface IShape {
// 	name: string
// 	getValue(): string
// }

// class Circle implements IShape {
// 	name: string = 'Circle'

// 	getValue(): string {
// 		return this.name
// 	}
// }

// function changeShape(shape: IShape) {
// 	shape.name = 'Triangle'
// 	return shape
// }

// function nullShape(shape: IShape) {
// 	shape.name = 'null'
// 	return shape
// }

// const shape = new Circle()
// console.log(shape) // Circle { name: 'Circle', getValue: [Function] }

// const changedShape = changeShape(new Circle())
// console.log(changedShape) // Circle { name: 'Triangle', getValue: [Function] }

// const nulledShape = nullShape(new Circle())
// console.log(nulledShape) // Circle { name: 'null', getValue: [Function] }
