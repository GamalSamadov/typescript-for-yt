class Example {
	static count = 0

	static increment() {
		this.count++
	}

	static decrement() {
		this.count--
	}
}

console.log(Example.count) // 0

Example.increment()
console.log(Example.count) // 1
Example.increment()
console.log(Example.count) // 2
