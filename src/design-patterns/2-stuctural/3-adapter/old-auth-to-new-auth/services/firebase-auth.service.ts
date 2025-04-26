export class FirebaseAuthService {
	async signin(email: string, password: string): Promise<string> {
		return `Logged in with email: ${email} password: ${password}`
	}

	async createUser(email: string, password: string): Promise<string> {
		return `User created with email: ${email} password: ${password}`
	}
}
