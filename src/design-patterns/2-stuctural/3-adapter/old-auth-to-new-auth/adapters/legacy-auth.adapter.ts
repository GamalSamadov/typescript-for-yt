import { AuthService } from '../interfaces/auth'
import { LegacyAuthService } from '../services/legacy-auth.service'

export class LegacyAuthAdapter implements AuthService {
	constructor(private legacyAuth: LegacyAuthService) {}

	login(email: string, password: string): Promise<string> {
		return this.legacyAuth.loginWithEmailAndPassword(email, password)
	}

	register(email: string, password: string): Promise<string> {
		return this.legacyAuth.loginWithEmailAndPassword(email, password)
	}
}
