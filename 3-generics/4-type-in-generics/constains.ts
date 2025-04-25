function getLength<T extends { length: number }>(item: T): number {
	// extends bu cheklash
	return item.length
}

console.log(getLength('hello')) // 5
console.log(getLength([1, 2, 3])) // 3
console.log(getLength({ length: 10 })) // 10

function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key]
}

const obj = {
	name: 'John',
	age: 30,
}

console.log(getProperty(obj, 'name')) // John
console.log(getProperty(obj, 'age')) // 30
