class User8 {
	name: string

	constructor(name: string) {
		this.name = name
	}

	sayHello() {
		console.log(`Hello, ${this.name}`)
	}
}

class Payment8 {
	amount: number

	constructor(amount: number) {
		this.amount = amount
	}

	pay() {
		console.log(`Paying ${this.amount} dollars`)
	}
}

class UserPayment8 {
	user: User8
	payment: Payment8

	constructor(user: User8, payment: Payment8) {
		this.user = user
		this.payment = payment
	}

	process() {
		this.user.sayHello()
		this.payment.pay()
	}
}

const userPayment = new UserPayment8(new User8('John'), new Payment8(100))
