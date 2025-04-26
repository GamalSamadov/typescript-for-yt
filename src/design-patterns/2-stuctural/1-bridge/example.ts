// 1. Payment methods
interface IPayment {
	pay(amount: number): void
}

class Payme implements IPayment {
	pay(amount: number): void {
		console.log(`Payme: Paying ${amount} using Payme`)
	}
}

class Click implements IPayment {
	pay(amount: number): void {
		console.log(`Click: Paying ${amount} using Click`)
	}
}

class Uzum implements IPayment {
	pay(amount: number): void {
		console.log(`Uzum: Paying ${amount} using Uzum`)
	}
}

// 2. Bridge pattern
abstract class PaymentGateway {
	constructor(protected method: IPayment) {}

	abstract checkout(amount: number): void
}

class WebStoreGateway extends PaymentGateway {
	checkout(amount: number): void {
		console.log('WebStoreGateway: Checking out...')
		this.method.pay(amount)
	}
}

class MobileStoreGateway extends PaymentGateway {
	checkout(amount: number): void {
		console.log('MobileStoreGateway: Checking out...')
		this.method.pay(amount)
	}
}

// 3. Usage
const payme = new Payme()
const click = new Click()
const uzum = new Uzum()

const webStore = new WebStoreGateway(payme)
const mobileStore = new MobileStoreGateway(click)

webStore.checkout(100)
mobileStore.checkout(200)
