import { CreatedAt, LogMethod } from '../decorators'

@CreatedAt
export class User {
	constructor(public name: string, public age: number) {}

	@LogMethod
	getInfo() {
		console.log(`User info: ${this.name} age: ${this.age}`)
	}
}
