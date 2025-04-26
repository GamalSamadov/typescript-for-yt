import { UserRequest } from '../interfaces/handler'
import { AbstractHandler } from './abstract.handler'

export class PermissionCheckHandler extends AbstractHandler {
	constructor(private requiredPermission: string) {
		super()
	}

	handle(request: UserRequest): void {
		if (!request.user.permissions.includes(this.requiredPermission)) {
			console.log(
				`Access denied: User does not have the required permission: ${this.requiredPermission}`
			)
			return
		}
		console.log(
			`Permission check passed: User has the required permission: ${this.requiredPermission}`
		)
		super.handle(request)
	}
}
