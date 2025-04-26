class User {
	constructor(
		public id: number,
		public name: string,
		public email: string,
		public password: string,
		public phone: string,
		public address: string,
		public city: string,
		public state: string,
		public country: string
	) {}
}

class UserBuilder {
	private id: number
	private name: string
	private email: string
	private password: string
	private phone: string
	private address: string
	private city: string
	private state: string
	private country: string

	setId(id: number): this {
		this.id = id
		return this
	}

	setName(name: string): this {
		this.name = name
		return this
	}

	setEmail(email: string): this {
		this.email = email
		return this
	}

	setPassword(password: string): this {
		this.password = password
		return this
	}

	setPhone(phone: string): this {
		this.phone = phone
		return this
	}

	setAddress(address: string): this {
		this.address = address
		return this
	}

	setCity(city: string): this {
		this.city = city
		return this
	}

	setState(state: string): this {
		this.state = state
		return this
	}

	setCountry(country: string): this {
		this.country = country
		return this
	}

	build(): User {
		return new User(
			this.id,
			this.name,
			this.email,
			this.password,
			this.phone,
			this.address,
			this.city,
			this.state,
			this.country
		)
	}
}

const user = new UserBuilder()
	.setId(1)
	.setName('John Doe')
	.setEmail('john@doe.com')
	.setPassword('password123')
	.setPhone('1234567890')
	.setAddress('123 Main St')
	.setCity('New York')
	.setState('NY')
	.setCountry('USA')
	.build() // so good to read and maintain and flexible, but we need to write a lot of code
