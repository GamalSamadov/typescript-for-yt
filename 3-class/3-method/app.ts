class Person3 {
	name: string
	age: number
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	greeting(): string {
		return `Hello im ${this.name} and im ${this.age} years old`
	}
}

const user3_1 = new Person3('John Doe', 30)
const user3_2 = new Person3('Jane Doe', 30)
