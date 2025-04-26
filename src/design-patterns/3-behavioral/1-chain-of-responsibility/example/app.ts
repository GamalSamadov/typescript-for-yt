import { AuthCheckHandler } from './handlers/auth-check.handler'
import { RoleCheckHandler } from './handlers/role-check.handler'
import { UserRequest } from './interfaces/handler'

const request: UserRequest = {
	user: {
		isAuthenticated: true,
		roles: ['admin'],
		permissions: ['read', 'write'],
	},
	action: 'delete',
}

// chain of responsibility

const auth = new AuthCheckHandler()
const role = new RoleCheckHandler('admin')
const permission = new RoleCheckHandler('read')

auth.next(role).next(permission)

auth.handle(request)
