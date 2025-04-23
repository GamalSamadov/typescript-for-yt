// =============
// Type casting
// =============

let message: unknown = 'Hello, TypeScript!'

// Angle bracket syntax
let strLength1: number = (<string>message).length

console.log(strLength1) // 17

let str: string = message as string
console.log(str.length) // 17

// =============
// type guards
// =============

function logger(msg: string | number) {
	if (typeof msg === 'string') {
		console.log(msg.toUpperCase())
	} else {
		console.log(msg.toFixed(2))
	}
}

logger('Hello, TypeScript!') // HELLO, TYPESCRIPT!
logger(42) // 42.00

class Dog {
	bark() {
		console.log('Woof!')
	}
}

class Cat {
	meow() {
		console.log('Meow!')
	}
}

function makeSound(animal: Dog | Cat) {
	if (animal instanceof Dog) {
		animal.bark()
	} else {
		animal.meow()
	}
}

makeSound(new Dog()) // Woof!
makeSound(new Cat()) // Meow!

type Car = {
	speed: number
}

type Plane = {
	altitude: number
}

function getInfo(vehicle: Car | Plane) {
	if ('speed' in vehicle) {
		console.log(`Car speed: ${vehicle.speed}`)
	} else {
		console.log(`Plane altitude: ${vehicle.altitude}`)
	}
}

// =============
// type assertions
// =============

function logNumber(val: unknown): asserts val is number {
	if (typeof val !== 'number') throw new Error('Not a number')
	console.log(val.toFixed(2))
}

const age: unknown = 10
logNumber(age)
