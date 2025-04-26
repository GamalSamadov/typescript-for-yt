import { AuthService } from '../interfaces/auth'
import { FirebaseAuthService } from '../services/firebase-auth.service'

export class FirebaseAuthAdapter implements AuthService {
	constructor(private firebaseAuth: FirebaseAuthService) {}

	login(email: string, password: string): Promise<string> {
		return this.firebaseAuth.signin(email, password)
	}

	register(email: string, password: string): Promise<string> {
		return this.firebaseAuth.createUser(email, password)
	}
}
