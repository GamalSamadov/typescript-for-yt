// Help desk

enum RequestIssue {
	NETWORK_ISSUE,
	PASSWORD_RESET,
	BILLING_ISSUE,
}

enum RequestLevel {
	LEVEL_1,
	LEVEL_2,
	LEVEL_3,
}

interface Handler {
	next(handler: Handler): Handler
	handle(req: RequestIssue): void
}

abstract class AbstractClass implements Handler {
	private nextHandler: Handler | null = null

	public next(handler: Handler): Handler {
		this.nextHandler = handler
		return handler // Chain builder pattern
	}

	handle(req: RequestIssue): void {
		if (this.nextHandler) {
			this.nextHandler.handle(req)
		} else {
			console.log(`NO handle for request: ${req}`)
		}
	}
}

class Level1Support extends AbstractClass {
	handle(req: RequestIssue): void {
		if (req === RequestIssue.PASSWORD_RESET) {
			console.log('Level 1 support: Password reset')
		} else {
			super.handle(req)
		}
	}
}

class Level2Support extends AbstractClass {
	handle(req: RequestIssue): void {
		if (req === RequestIssue.BILLING_ISSUE) {
			console.log('Level 2 support: Billing issue')
		} else {
			super.handle(req)
		}
	}
}

class Level3Support extends AbstractClass {
	handle(req: RequestIssue): void {
		if (req === RequestIssue.NETWORK_ISSUE) {
			console.log('Level 3 support: Network issue')
		} else {
			super.handle(req)
		}
	}
}

const level1 = new Level1Support()
const level2 = new Level2Support()
const level3 = new Level3Support()

level1.next(level2).next(level3)

level1.handle(RequestIssue.PASSWORD_RESET) // Level 1 support: Password reset
level1.handle(RequestIssue.BILLING_ISSUE) // Level 2 support: Billing issue
level1.handle(RequestIssue.NETWORK_ISSUE) // Level 3 support: Network issue
