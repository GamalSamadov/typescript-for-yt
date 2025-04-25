interface Name {
	name: string
}

interface Age {
	age: number
}

function merge<T, U>(obj1: T, obj2: U): T & U {
	return { ...obj1, ...obj2 }
}

const merged = merge<Name, Age>({ name: 'John' }, { age: 30 })
