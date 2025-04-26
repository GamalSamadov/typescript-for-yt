class Variant {
	constructor(
		public name: string,
		public price: number,
		public stock: number
	) {}
}

class Product {
	constructor(
		public title: string,
		public description: string,
		public variants: Variant[] = []
	) {}
}

class VariantBuilder {
	private name: string = ''
	private price: number = 0
	private stock: number = 0

	setName(name: string): this {
		this.name = name
		return this
	}

	setPrice(price: number): this {
		this.price = price
		return this
	}

	setStock(stock: number): this {
		this.stock = stock
		return this
	}

	build(): Variant {
		return new Variant(this.name, this.price, this.stock)
	}
}

class ProductBuilder {
	private title: string = ''
	private description: string = ''
	private variants: Variant[] = []

	setTitle(title: string): this {
		this.title = title
		return this
	}

	setDescription(description: string): this {
		this.description = description
		return this
	}

	addVariant(variant: Variant): this {
		this.variants.push(variant)
		return this
	}

	build(): Product {
		return new Product(this.title, this.description, this.variants)
	}
}

// usage

const variant1 = new VariantBuilder()
	.setName('M1 Pro')
	.setPrice(1999)
	.setStock(10)
	.build()

const variant2 = new VariantBuilder()
	.setName('M1 Max')
	.setPrice(2499)
	.setStock(5)
	.build()

const product = new ProductBuilder()
	.setTitle('MacBook Pro')
	.setDescription('The best MacBook ever')
	.addVariant(variant1)
	.addVariant(variant2)
	.build()

console.log(product)
