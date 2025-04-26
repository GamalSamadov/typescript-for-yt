import { HashService } from '../services/hash.service'
import { TokenService } from '../services/token.service'
import { UserService } from '../services/user.service'

export class AuthFacade {
	private userService: UserService
	private hashService: HashService
	private tokenService: TokenService

	register(email: string, password: string) {
		const existingUser = this.userService.findByEmail(email)

		if (existingUser) {
			throw new Error('User already exists')
		}

		const hashedPassword = this.hashService.hash(password)
		this.userService.create(email, hashedPassword)

		return this.tokenService.generateToken({ email, password: hashedPassword })
	}

	login(email: string, password: string) {
		const user = this.userService.findByEmail(email)

		if (!user) {
			throw new Error('User not found')
		}

		const isMatch = this.hashService.compare(password, user.password)

		if (!isMatch) {
			throw new Error('Invalid password')
		}

		return this.tokenService.generateToken({ email, password: user.password })
	}
}
