interface PaymentMethod {
	pay(amount: number): void
}

enum PaymentType {
	UZUM,
	CLICK,
	QIWI,
	CRYPTO,
	APPLE_PAY,
	GOOGLE_PAY,
}

class UzumPayment implements PaymentMethod {
	pay(amount: number): void {
		console.log(`Paying ${amount} using Uzum`)
	}
}

class ClickPayment implements PaymentMethod {
	pay(amount: number): void {
		console.log(`Paying ${amount} using Click`)
	}
}

class QiwiPayment implements PaymentMethod {
	pay(amount: number): void {
		console.log(`Paying ${amount} using Qiwi`)
	}
}

class CryptoPayment implements PaymentMethod {
	pay(amount: number): void {
		console.log(`Paying ${amount} using Crypto`)
	}
}

class ApplePayPayment implements PaymentMethod {
	pay(amount: number): void {
		console.log(`Paying ${amount} using Apple Pay`)
	}
}

class GooglePayPayment implements PaymentMethod {
	pay(amount: number): void {
		console.log(`Paying ${amount} using Google Pay`)
	}
}

class PaymentFactory {
	static createPaymentMethod(type: PaymentType): PaymentMethod {
		switch (type) {
			case PaymentType.UZUM:
				return new UzumPayment()
			case PaymentType.CLICK:
				return new ClickPayment()
			case PaymentType.QIWI:
				return new QiwiPayment()
			case PaymentType.CRYPTO:
				return new CryptoPayment()
			case PaymentType.APPLE_PAY:
				return new ApplePayPayment()
			case PaymentType.GOOGLE_PAY:
				return new GooglePayPayment()
			default:
				throw new Error('Invalid payment method')
		}
	}
}

// Usage
const paymentMethod = PaymentFactory.createPaymentMethod(PaymentType.UZUM)
paymentMethod.pay(100) // Output: Paying 100 using Uzum
const paymentMethod2 = PaymentFactory.createPaymentMethod(PaymentType.CLICK)
paymentMethod2.pay(200) // Output: Paying 200 using Click
const paymentMethod3 = PaymentFactory.createPaymentMethod(PaymentType.QIWI)
paymentMethod3.pay(300) // Output: Paying 300 using Qiwi
const paymentMethod4 = PaymentFactory.createPaymentMethod(PaymentType.CRYPTO)
paymentMethod4.pay(400) // Output: Paying 400 using Crypto
const paymentMethod5 = PaymentFactory.createPaymentMethod(PaymentType.APPLE_PAY)
paymentMethod5.pay(500) // Output: Paying 500 using Apple Pay
const paymentMethod6 = PaymentFactory.createPaymentMethod(
	PaymentType.GOOGLE_PAY
)
paymentMethod6.pay(600) // Output: Paying 600 using Google Pay
const paymentMethod7 = PaymentFactory.createPaymentMethod(PaymentType.UZUM)
paymentMethod7.pay(700) // Output: Paying 700 using Uzum
const paymentMethod8 = PaymentFactory.createPaymentMethod(PaymentType.CLICK)
paymentMethod8.pay(800) // Output: Paying 800 using Click
const paymentMethod9 = PaymentFactory.createPaymentMethod(PaymentType.QIWI)
paymentMethod9.pay(900) // Output: Paying 900 using Qiwi
const paymentMethod10 = PaymentFactory.createPaymentMethod(PaymentType.CRYPTO)
paymentMethod10.pay(1000) // Output: Paying 1000 using Crypto
const paymentMethod11 = PaymentFactory.createPaymentMethod(
	PaymentType.APPLE_PAY
)
paymentMethod11.pay(1100) // Output: Paying 1100 using Apple Pay
const paymentMethod12 = PaymentFactory.createPaymentMethod(
	PaymentType.GOOGLE_PAY
)
paymentMethod12.pay(1200) // Output: Paying 1200 using Google Pay
