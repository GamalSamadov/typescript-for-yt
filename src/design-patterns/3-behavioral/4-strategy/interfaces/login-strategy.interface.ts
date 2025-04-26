export interface LoginStrategy {
	login(username: string, password: string): void
}
