class Car1 {
	name: string
	year: Date
	constructor(name: string, year: Date) {
		this.name = name
		this.year = year
	}
}

const toyota = new Car1('Toyota', new Date()) // Create an instance of the Car class

toyota.name = 'Toyota Corolla' // Update the name property

console.log(toyota.name) // Output: Toyota Corolla
