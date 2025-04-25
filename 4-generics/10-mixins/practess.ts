// 1. generic constructor type

type Constructor<T = {}> = new (...args: any[]) => T

// 2. Logger Mixin
function CanLog<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		log(message: string) {
			console.log(`[LOG]: ${message}`)
		}
	}
}

// 3. Access Control Mixin
function CanAccess<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		role: string = 'guest'

		setRole(role: string) {
			this.role = role
		}

		canAccess(requiredRole: string): boolean {
			return this.role === requiredRole
		}
	}
}

// 4. Validation Mixin
function CanValidate<TBase extends Constructor>(Base: TBase) {
	return class extends Base {
		isValidEmail(email: string): boolean {
			return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
		}

		isNotEmpty(value: string): boolean {
			return value.trim().length > 0
		}
	}
}

// 5. Create Base class

class BaseService {}

// 6. Mixin all the features
const MixedService = CanValidate(CanLog(CanAccess(BaseService)))

// 7. UserService class
class UserService extends MixedService {
	createUser(email: string, role: string) {
		if (!this.isValidEmail(email)) {
			this.log('Invalid email address')
			return
		}

		if (!this.isNotEmpty(role)) {
			this.log('Role cannot be empty')
			return
		}

		if (!this.canAccess('admin')) {
			this.log('Access denied')
			return
		}

		this.setRole(role)
		this.log(`User created with email: ${email} and role: ${role}`)
	}
}

// 8. Create an instance of UserService
const userService = new UserService()

userService.setRole('user')
userService.createUser('user@gmail.com', 'Alice')

userService.setRole('admin')
userService.createUser('admin@gmail.com', 'Osman')
