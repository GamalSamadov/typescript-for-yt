export class UserService {
	private users: Map<string, { email: string; password: string }> = new Map()

	create(email: string, password: string) {
		this.users.set(email, { email, password })
	}

	findByEmail(email: string) {
		return this.users.get(email)
	}
}
