export interface Person {
	firstName: string
	lastName: string
	wife?: Person
}

export interface Person {
	age: number
}

export interface Worker extends Person {
	occupation: string
}

export type ID = string | number

export interface PersonWithIndexSignature {
	[key: string]: string | number
}
