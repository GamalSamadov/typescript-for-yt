import { LoginStrategy } from '../interfaces/login-strategy.interface'

export class EmailLoginStrategy implements LoginStrategy {
	login(username: string, password: string): void {
		if (!password || !username) {
			throw new Error('Username and password are required')
		}
		console.log(`Logging in with email: ${username} and password: ${password}`)
	}
}
