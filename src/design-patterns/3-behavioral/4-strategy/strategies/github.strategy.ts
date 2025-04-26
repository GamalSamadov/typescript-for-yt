import { LoginStrategy } from '../interfaces/login-strategy.interface'

export class GitHubLoginStrategy implements LoginStrategy {
	login(username: string, password: string): void {
		if (!password || !username) {
			throw new Error('Username and password are required')
		}
		console.log(`Logging in with GitHub: ${username} and password: ${password}`)
	}
}
