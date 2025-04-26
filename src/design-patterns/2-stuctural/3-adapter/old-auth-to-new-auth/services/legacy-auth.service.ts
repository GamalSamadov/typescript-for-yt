export class LegacyAuthService {
	async loginWithEmailAndPassword(
		email: string,
		password: string
	): Promise<string> {
		return `Logged in with email: ${email} password: ${password}`
	}
}
