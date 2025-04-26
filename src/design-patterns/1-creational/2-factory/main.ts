// // factory
// // Bitta funksiya yoki class ning static methodi orqali bir nechta class lardan instanslar yaratish usuli.

interface Person {
	greeting(): void
}

enum PersonType {
	EMPLOYEE = 'employee',
	MANAGER = 'manager',
}

class Employee implements Person {
	greeting() {
		console.log('Hello, I am an employee')
	}
}

class Manager implements Person {
	greeting() {
		console.log('Hello, I am a manager')
	}
}

class PersonFactory {
	static createPerson(type: PersonType): Person {
		switch (type) {
			case PersonType.EMPLOYEE:
				return new Employee()
			case PersonType.MANAGER:
				return new Manager()
			default:
				throw new Error('Invalid person type')
		}
	}
}

const employee = PersonFactory.createPerson(PersonType.EMPLOYEE)
const manager = PersonFactory.createPerson(PersonType.MANAGER)

employee.greeting() // Hello, I am an employee
manager.greeting() // Hello, I am a manager
