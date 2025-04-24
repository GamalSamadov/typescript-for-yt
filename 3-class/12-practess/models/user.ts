import { Role } from '../enums/role'

export class User {
	constructor(public id: number, public name: string, public role: Role) {}
}
