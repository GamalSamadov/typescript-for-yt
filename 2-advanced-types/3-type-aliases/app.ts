import {
	CompanyWorker,
	Employee,
	Logger,
	Person,
	PersonList,
} from './app.types'

type ID = string | number

let userId: ID
userId = 1
userId = '1'

let productId: ID
productId = 1
productId = '1'

const user1: Person = {
	name: 'John',
	age: 30,
}

const log: Logger = message => message.toLowerCase()

console.log(log('HELLO WORLD'))

let worker1: CompanyWorker = {
	name: 'John',
	age: 30,
	skills: ['JavaScript', 'TypeScript'],
	company: 'Google',
	role: 'Developer',
}

let employee: Employee = {
	company: 'Google',
	role: 'Developer',
}

let person: Person = {
	name: 'John',
	age: 30,
	skills: ['JavaScript', 'TypeScript'],
}

const persons: PersonList = [
	{
		name: 'John',
		age: 30,
		skills: ['JavaScript', 'TypeScript'],
	},
	{
		name: 'Jane',
		age: 25,
		skills: ['Python', 'Django'],
	},
	{
		name: 'Bob',
		age: 35,
		skills: ['Java', 'Spring'],
	},
]
