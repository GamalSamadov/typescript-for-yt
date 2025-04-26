interface Prototype<T> {
	clone(): T
}

class Person implements Prototype<Person> {
	constructor(
		public name: string,
		public role: string,
		public metadata: {
			date: string
			tags: string[]
		} = {
			date: new Date().toISOString(),
			tags: [],
		}
	) {}

	clone(): Person {
		// return new Person(this.name, this.role) // Shallow copy

		// deep clone (the reference data will be copied and cloned too. not only the primitives)
		const clonedData = JSON.parse(JSON.stringify(this))
		return new Person(clonedData.name, clonedData.role, clonedData.metadata)
	}
}

const john = new Person('John Doe', 'Developer', {
	date: '2023-10-01',
	tags: ['typescript', 'design-patterns'],
})
const jane = john.clone()
jane.name = 'Jane Doe'

jane.metadata.tags = ['typescript', 'design-patterns', 'javascript']

console.log(john.metadata) //
console.log(jane.metadata) //
