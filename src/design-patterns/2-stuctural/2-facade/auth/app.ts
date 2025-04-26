import { AuthFacade } from './pattern/auth.facade'

const auth = new AuthFacade()

function login() {
	try {
		const token = auth.login('a@a.com', '123456')

		console.log('Login successful, token:', token)
	} catch (error) {
		console.error('Login failed:', error)
	}
}

function register() {
	try {
		const token = auth.register('a@a.com', '123456')

		console.log('Login successful, token:', token)
	} catch (error) {
		console.error('Login failed:', error)
	}
}

register()
login()
