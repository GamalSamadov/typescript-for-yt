class Person1 {
	count: number = 0
	constructor(public name: string) {}

	increment = () => {
		this.count++
		console.log(this.count)
	}
}

const t = new Person1('c')

t.increment() // 1
t.increment() // 2
t.increment() // 3

const testFn1 = t.increment // works with arrow function well
testFn1() // 1
