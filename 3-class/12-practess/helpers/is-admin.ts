import { Admin } from '../models/admin'
import { User } from '../models/user'

export function isAdmin(user: User): user is Admin {
	return user instanceof Admin
}
