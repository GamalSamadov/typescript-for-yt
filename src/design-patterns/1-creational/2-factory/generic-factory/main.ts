type Constructor<T> = new (...args: any[]) => T

class Factory {
	static create<T>(Ctor: Constructor<T>, ...args: any[]): T {
		return new Ctor(...args)
	}
}

class User {
	constructor(public name: string) {}
}

class Product {
	constructor(public title: string, public price: number) {}
}

const user = Factory.create(User, 'John Doe')
const product = Factory.create(Product, 'Laptop', 999.99)

console.log(user) // User { name: 'John Doe' }
console.log(product) // Product { title: 'Laptop', price: 999.99 }
