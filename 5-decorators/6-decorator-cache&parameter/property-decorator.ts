function UpperCase(target: any, propertyKey: string) {
	// console.log('Target: ', target) // target is the prototype of the class
	// console.log('Property Key: ', propertyKey) // propertyKey is the name of the property being decorated

	let value: string

	const getter = () => {}

	const setter = (newValue: string) => {
		value = newValue.toUpperCase()
	}

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	})
}

function LowerCase(target: any, propertyKey: string) {
	let value: string

	const getter = () => {}

	const setter = (newValue: string) => {
		value = newValue.toLowerCase()
	}

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter,
		enumerable: true,
		configurable: true,
	})
}

class User {
	@UpperCase
	name: string

	@LowerCase
	email: string

	constructor(name: string, email: string) {
		this.name = name
		this.email = email
	}
}

const user = new User('John Doe', 'GAMAL@samadov.dev')
console.log(user.name) // Output: JOHN DOE
console.log(user.email) // Output: gamal@samadov.dev
