interface IAnimal {
	name: string
	sound(): void
}

interface IBird {
	fly(): void
}

abstract class AnimalAbc {
	constructor(public name: string) {}

	abstract sound(): void // abstract method

	move(): void {
		console.log(`${this.name} is moving`)
	}
}

// const animal = new AnimalAbc('Dog') // error: Cannot create an instance of an abstract class

class Cat10 extends AnimalAbc {
	constructor(name: string) {
		super(name)
	}

	sound(): void {
		console.log('Meow')
	}
}

class Bird implements IAnimal, IBird {
	name: string

	constructor(name: string) {
		this.name = name
	}

	sound(): void {
		console.log('Chirp')
	}

	fly(): void {
		console.log(`${this.name} is flying`)
	}
}

// the main difference between abstract class and interface is that abstract class can have implementation
// and interface can not have implementation
// abstract class can have constructor
// and interface can not have constructor
// abstract class can have access modifiers
// and interface can not have access modifiers
// abstract class can a normal methods that has implementations
// and interface can not have normal methods that has implementations
// abstract class can have properties
// and interface can have properties
// abstract class can have static methods
// and interface can not have static methods
// abstract class can have static properties
// and interface can not have static properties
// the class that extends the abstract class will extend only one abstract class
// and the class that implements the interface can implement multiple interfaces
