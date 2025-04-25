interface IProduct {
	id: number
	name: string
	price: number
}

function createProduct(product: IProduct) {
	return product
}

let product = createProduct({
	id: 1,
	name: 'Product 1',
	price: 100,
})

function updateProduct(updated: Partial<IProduct>) {
	product = {
		...product,
		...updated,
	}
}

updateProduct({
	price: 200,
})

console.log(product) // { id: 1, name: 'Product 1', price: 200 }

// Required<IProduct> makes all properties required
// Partial<IProduct> makes all properties optional
// Readonly<IProduct> makes all properties readonly
// Pick<IProduct, 'id' | 'name'> makes a new type with only the id and name properties
// Omit<IProduct, 'id'> makes a new type with all properties except the id property
// Record<string, IProduct> makes a new type with string keys and IProduct values

// Extract<IProduct, IProduct2> ikkalsidagi mushtaraklarni alohida qilib type qilib beradi
// Exclude<IProduct, IProduct2> ikkalsidagi farqli turlarni alohida qilib type qilib beradi

// ReturnType<typeof function> functionning qaytargan turini beradi
// Parameters<typeof function> functionning parametrlarini turini array qilib beradi
// ConstructorParameters<typeof class> classning constructorini parametrlarini turini array qilib beradi
// Awaited<typeof function> async function ning qaytargan turini alohida qilib type qilib beradi
