import { FirebaseAuthAdapter } from './adapters/firebase-auth.adapter'
import { LegacyAuthAdapter } from './adapters/legacy-auth.adapter'
import { FirebaseAuthService } from './services/firebase-auth.service'
import { LegacyAuthService } from './services/legacy-auth.service'

async function bootstrap() {
	const firebaseAuthAdapter = new FirebaseAuthAdapter(new FirebaseAuthService())
	const legacyAuthAdapter = new LegacyAuthAdapter(new LegacyAuthService())

	const firebaseLogin = await firebaseAuthAdapter.login('a@a.com', '123456')
	const firebaseRegister = await firebaseAuthAdapter.register(
		'a@a.com',
		'123456'
	)

	const legacyLogin = await legacyAuthAdapter.login('a@a.com', '123456')
	const legacyRegister = await legacyAuthAdapter.register('a@a.com', '123456')

	console.log('Firebase Login:', firebaseLogin)
	console.log('Firebase Register:', firebaseRegister)
	console.log('Legacy Login:', legacyLogin)
	console.log('Legacy Register:', legacyRegister)
}

bootstrap()
