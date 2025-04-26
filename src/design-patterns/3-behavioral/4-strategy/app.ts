import { LoginStrategy } from './interfaces/login-strategy.interface'
import { EmailLoginStrategy } from './strategies/email.strategy'
import { GitHubLoginStrategy } from './strategies/github.strategy'
import { GoogleLoginStrategy } from './strategies/google.strategy'

class AuthService {
	constructor(private strategy: LoginStrategy) {}

	setStrategy(strategy: LoginStrategy) {
		this.strategy = strategy
	}

	login(username: string, password: string) {
		this.strategy.login(username, password)
	}
}

const auth = new AuthService(new EmailLoginStrategy())
auth.login('a@a.com', '123456')

auth.setStrategy(new GoogleLoginStrategy())
auth.login('a@a.com', '123456')

auth.setStrategy(new GitHubLoginStrategy())
auth.login('a@a.com', '123456')
