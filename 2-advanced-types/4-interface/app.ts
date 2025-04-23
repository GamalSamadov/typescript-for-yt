import { Person, PersonWithIndexSignature } from './app.types'

const person: Person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	wife: {
		firstName: 'Jane',
		lastName: 'Doe',
		age: 28,
	},
}

const personWithIndexSignature: PersonWithIndexSignature = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	// isMerried: true, // gives error
}
