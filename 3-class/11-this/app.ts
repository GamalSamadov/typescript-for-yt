class Person {
	count: number = 0
	constructor(public name: string) {}

	increment() {
		this.count++
		console.log(this.count)
	}
}

const c = new Person('c')

c.increment() // 1
c.increment() // 2
c.increment() // 3

// const testFn = c.increment
// testFn() // TypeError: Cannot read properties of undefined (reading 'count')

const testFn = c.increment.bind(c)
testFn() // 1
