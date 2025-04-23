export type Person = {
	name: string
	age: number
	skills?: string[]
	wife?: Person
}

export type PersonList = Person[]

export type Employee = {
	company: string
	role: string
}

export type CompanyWorker = Person & Employee

export type Logger = (message: string) => string
