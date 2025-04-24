enum Provider {
	STRIPE = 'stripe',
	PAYPAL = 'paypal',
	APPLE_PAY = 'apple_pay',
}

enum Status {
	PENDING,
	APPROVED,
	REJECTED,
}

class Payment {
	provider: Provider
	status: Status
	createdAt: Date
	updatedAt: Date

	constructor(provider: Provider) {
		this.provider = provider
		this.status = Status.PENDING
		this.createdAt = new Date()
		this.updatedAt = new Date()
	}

	rejectPayment() {
		setTimeout(() => {
			if (this.status === Status.APPROVED) {
				throw new Error('Payment already approved')
			}

			this.status = Status.REJECTED
			this.updatedAt = new Date()
		}, 2000)
	}

	approvePayment() {
		setTimeout(() => {
			if (this.status === Status.REJECTED) {
				throw new Error('Payment already rejected')
			}

			this.status = Status.APPROVED
			this.updatedAt = new Date()
		}, 2000)
	}

	getLiveTime(): number {
		return new Date().getTime() - this.createdAt.getTime()
	}
}

const payme = new Payment(Provider.STRIPE)

console.log(payme.getLiveTime())
