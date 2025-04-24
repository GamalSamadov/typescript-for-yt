class Employee {
	private _salary: number | undefined

	// set is synchronous function
	set salary(value: number) {
		if (value < 0) {
			throw new Error('Salary cannot be negative')
		}
		this._salary = value
	}

	// get is synchronous function
	get salary(): number | undefined {
		return this._salary
	}
}

const employee = new Employee()

employee.salary = 5000
console.log(employee.salary) // 5000

// use cases:
// 1. encapsulation
// 2. validation
// 3. calculation
