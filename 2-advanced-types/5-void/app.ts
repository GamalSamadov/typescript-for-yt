function logger(text: string, callback: (message: string) => void): void {
	console.log(text)
	callback(text)
}

let unusable: void // null is not acceptable

// unusable = null // null is not acceptable

unusable = undefined // undefined is acceptable

logger('Hello', message => {
	console.log(message)
})

interface Calc {
	a: number
	b?: number
}

function add({ a, b }: Calc): number {
	return !b ? a : a + b
}

console.log(add({ a: 1, b: 2 })) // 3
console.log(add({ a: 1 })) // 1
