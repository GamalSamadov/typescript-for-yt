// Constructor is a method that is called when an object is created
// It is used to initialize the object
// we can give the types of the parameters. but we can not give the types of the return type

class Car2 {
	// ! ==> not null
	name!: string
	year!: Date
	// also we can use strictPropertyInitialization: true in tsconfig.json without using ! operator

	// Constructor overloading signatures
	constructor(name: string, year: Date)
	constructor(data: { name: string; year: Date })

	constructor(nameOrData: string | { name: string; year: Date }, year?: Date) {
		if (typeof nameOrData === 'string') {
			this.name = nameOrData
			this.year = year!
		} else if (typeof nameOrData === 'object') {
			this.name = nameOrData.name
			this.year = nameOrData.year
		}
	}
}

const hyundai = new Car2('Toyota', new Date('2020-01-01'))
const honda = new Car2({
	name: 'Honda',
	year: new Date('2021-01-01'),
})
