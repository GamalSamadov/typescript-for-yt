class Calculator {
	value: number = 0

	add(num: number): this {
		this.value += num
		return this
	}

	subtract(num: number): Calculator {
		// Calculator same with this
		this.value -= num
		return this
	}

	multiply(num: number): this {
		this.value *= num
		return this
	}

	get(): number {
		return this.value
	}
}

const calc = new Calculator()

const result = calc.add(4).subtract(2).multiply(3).get()
console.log(result) // 6

console.log(calc.get())
