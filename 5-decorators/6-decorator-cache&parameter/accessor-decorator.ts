function Readonly(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	descriptor.set = () => {
		throw new Error(
			`Cannot set property ${propertyKey} of ${target.constructor.name}`
		)
	}
}

class Product2 {
	private _id: string = '100'

	constructor(id: string) {
		this._id = id
	}

	@Readonly
	get id() {
		return this._id
	}
}

const product2 = new Product2('200')
console.log(product2.id) // Output: 200

// product2.id = '300' // Error: Cannot set property id of Product2
