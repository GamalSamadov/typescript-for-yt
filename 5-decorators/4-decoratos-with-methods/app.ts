// function Logger(
// 	target: Object,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	// console.log('target', target) // User {}
// 	// console.log('propertyKey', propertyKey) // greeting
// 	// console.log('descriptor', descriptor) // { value: [Function: greeting], writable: true, enumerable: false, configurable: true }

// 	descriptor.value = function (...args: any[]) {
// 		console.log('Method not implemented.')
// 		return args
// 	}
// }

// class User {
// 	constructor(public name: string, public age: number) {}

// 	@Logger
// 	greeting() {
// 		throw new Error('Method not implemented.')
// 	}
// }

// const usr = new User('John', 30)
// usr.greeting() // Hello, my name is John and I am 30 years old.

// // Behavior
