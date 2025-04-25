// interface IExample {
// 	name: string
// 	getValue(): string
// }

// function Logger(constructor: Function) {
// 	console.log(`[LOG]: ${constructor.name} was created`)
// }

// function FirstDecorator(constructor: Function) {
// 	console.log(`[LOG]: ${constructor.name} was created FirstDecorator`)
// }

// @FirstDecorator
// @Logger // this decorator will be executed first
// class ShapeExample implements IExample {
// 	constructor(public name: string = 'Circle') {
// 		console.log('Circle created')
// 	}

// 	getValue(): string {
// 		return this.name
// 	}
// }

// const shape = new ShapeExample()
