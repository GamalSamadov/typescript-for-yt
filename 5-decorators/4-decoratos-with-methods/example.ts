// function Logger(
// 	target: Object,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	descriptor.value = function (...args: any[]) {
// 		console.log('Method not implemented.')
// 		return args
// 	}
// }

// function Admin(
// 	target: Object,
// 	propertyKey: string,
// 	descriptor: PropertyDescriptor
// ) {
// 	const originalMethod = descriptor.value
// 	descriptor.value = function (this: { isAdmin: boolean }, ...args: any[]) {
// 		// modification of the method
// 		// console.log(this) // the instance of the class that is being decorated its method

// 		if (!this.isAdmin) {
// 			console.log('You are not allowed to delete this user')
// 			return
// 		}

// 		return originalMethod.apply(this, args)
// 	}

// 	return descriptor
// }

// function Auth(role: 'admin' | 'user') {
// 	return function (
// 		target: Object,
// 		propertyKey: string,
// 		descriptor: PropertyDescriptor
// 	) {
// 		const originalMethod = descriptor.value
// 		descriptor.value = function (...args: any[]) {
// 			if (role !== 'admin') {
// 				throw new Error('You are not allowed to delete this user')
// 			}
// 			return originalMethod.apply(this, args)
// 		}
// 	}
// }

// class User {
// 	constructor(
// 		public name: string,
// 		public age: number,
// 		public isAdmin: boolean = false
// 	) {}

// 	@Logger
// 	greeting() {
// 		throw new Error('Method not implemented.')
// 	}

// 	// @Admin
// 	@Auth('admin')
// 	delete() {
// 		console.log('User is being deleted... ')
// 	}
// }

// const usr = new User('John', 30)
// usr.greeting()
