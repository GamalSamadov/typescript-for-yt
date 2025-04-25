import { CreatedAt, LogMethod } from '../decorators'

@CreatedAt
export class Product {
	constructor(public name: string, public price: number) {}

	@LogMethod
	getInfo() {
		console.log(`Product info: name: ${this.name}, price: ${this.price}`)
	}
}
