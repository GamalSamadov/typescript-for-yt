// public - accessible everywhere
// private - only accessible in the class
// protected - only accessible in the class and its subclasses

class Employer {
	public name: string
	constructor(name: string) {
		this.name = name
	}

	public getSalary() {
		console.log(`Salary of ${this.name} is 1000`)
	}
}
