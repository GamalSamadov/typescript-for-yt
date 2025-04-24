enum Provider1 {
	STRIPE = 'stripe',
	PAYPAL = 'paypal',
	APPLE_PAY = 'apple_pay',
}

enum Status2 {
	PENDING,
	APPROVED,
	REJECTED,
}

class Payment2 {
	provider: Provider1
	status: Status2
	providers: string[]
	createdAt: Date
	updatedAt: Date

	constructor(provider: Provider1) {
		this.provider = provider
		this.status = Status2.PENDING
		this.providers = []
		this.createdAt = new Date()
		this.updatedAt = new Date()
	}

	rejectPayment() {
		setTimeout(() => {
			if (this.status === Status2.APPROVED) {
				throw new Error('Payment already approved')
			}

			this.status = Status2.REJECTED
			this.updatedAt = new Date()
		}, 2000)
	}

	approvePayment() {
		setTimeout(() => {
			if (this.status === Status2.REJECTED) {
				throw new Error('Payment already rejected')
			}

			this.status = Status2.APPROVED
			this.updatedAt = new Date()
		}, 2000)
	}

	getLiveTime(): number {
		return new Date().getTime() - this.createdAt.getTime()
	}

	getProviders(provider: string): void
	getProviders(providers: string[]): void
	getProviders(providerOrProviders: string | string[]): void {
		if (typeof providerOrProviders === 'string') {
			this.providers.push(providerOrProviders)
		} else {
			this.providers = this.providers.concat(providerOrProviders)
		}
	}
}

const payment = new Payment2(Provider1.PAYPAL)

payment.getProviders('PayPal')
console.log(payment.providers) // ['PayPal']
payment.getProviders(['Stripe', 'Google Pay'])
console.log(payment.providers) // ['PayPal', 'Stripe', 'Google Pay']
