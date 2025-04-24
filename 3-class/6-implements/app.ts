interface IUser {
	logger(): void
}

class User implements IUser {
	logger(): void {
		console.log('User logger')
	}
}

interface IDrivable {
	startEngine(): void
	drive(speed: number): void
}

class Car implements IDrivable {
	startEngine(): void {
		console.log('Engine started')
	}

	drive(speed: number): void {
		console.log(`Driving at ${speed} km/h`)
	}
}

// why we use interfaces?
// type safety
// polymorphism
// code organization
