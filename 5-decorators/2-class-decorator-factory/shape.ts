// interface IShape {
// 	name: string
// 	getValue(): string
// }

// function ChangeShape<TBase extends { new (...args: any[]): {} }>(
// 	constructor: TBase
// ) {
// 	return class extends constructor {
// 		name: string = 'Changed Shape'
// 	}
// }

// function Logger(prefix: string) {
// 	return function (constructor: Function) {
// 		console.log(`[LOGGER]: ${prefix} - ${constructor.name}`)
// 	}
// }

// function WithVersion(version: '1.0.0' | '2.0.0') {
// 	return function <TBase extends { new (...args: any[]): {} }>(
// 		constructor: TBase
// 	) {
// 		return class extends constructor {
// 			public version: string = version
// 		}
// 	}
// }

// @ChangeShape
// @WithVersion('1.0.0')
// @Logger('Hello world') // [LOGGER]: Hello world - Circle
// class Circle implements IShape {
// 	constructor(public name: string = 'Created Circle') {}

// 	public getValue(): string {
// 		return `Circle: ${this.name}`
// 	}
// }

// const circle1 = new Circle('Circle 1')

// console.log(circle1) // { name: 'Changed Shape' }
