export class TokenService {
	generateToken(payload: { email: string; password: string }): string {
		return `token_${payload.email}-${new Date().getTime()}`
	}
}
