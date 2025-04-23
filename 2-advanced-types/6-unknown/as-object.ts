let person: unknown = {
	name: 'John Doe',
	age: 30,
	isEmployed: true,
}

interface ICustomPerson {
	name: string
	age: number
	isEmployed: boolean
}

if (typeof person === 'object') {
	const obj = person as ICustomPerson
	console.log(obj.name) // John Doe
}
