// interface Prototype<T> {
// 	clone(): T
// }

// class Person implements Prototype<Person> {
// 	constructor(
// 		public name: string,
// 		public role: string,
// 		public metadata: {
// 			date: string
// 			tags: string[]
// 		} = {
// 			date: new Date().toISOString(),
// 			tags: [],
// 		}
// 	) {}

// 	clone(): Person {
// 		const clonedData = JSON.parse(JSON.stringify(this))
// 		return new Person(clonedData.name, clonedData.role, clonedData.metadata)
// 	}
// }

// type TPersonTypes = 'Person' | 'Employee' | 'Manager'

// class PersonFactory {
// 	private static templates: Record<TPersonTypes, Person> = {
// 		Person: new Person('John Doe', 'Developer'),
// 		Employee: new Person('Jane Doe', 'Employee'),
// 		Manager: new Person('Jack Doe', 'Manager'),
// 	}

// 	static createPerson(type: TPersonTypes): Person {
// 		const template = this.templates[type]
// 		if (!template) {
// 			throw new Error(`Template ${type} not found`)
// 		}
// 		return template.clone()
// 	}
// }

// // Usage
// const person1 = PersonFactory.createPerson('Person')
// person1.name = 'John Doe'
// person1.role = 'Software Engineer'
// person1.metadata.tags = ['typescript', 'design-patterns']

// const person2 = person1.clone()
// person2.name = 'Walter White'
// person2.role = 'Chemist'
// person2.metadata.tags = ['chemistry', 'breaking-bad']

// console.log(person1) // Person { name: 'John Doe', role: 'Software Engineer', metadata: { date: '2023-10-01T12:00:00.000Z', tags: [Array] } }
