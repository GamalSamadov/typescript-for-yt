class Shape {
	color: string

	constructor(color: string) {
		this.color = color
	}

	describe() {
		console.log(`This is a shape of color ${this.color}`)
	}
}

class Circle extends Shape {
	radius: number

	constructor(color: string, radius: number) {
		super(color) // should be before using this
		this.radius = radius
	}

	area() {
		return Math.PI * this.radius ** 2
	}
}

const circle = new Circle('red', 5)
circle.describe() // This is a shape of color red
console.log(`Area: ${circle.area()}`) // Area: 78.53981633974483
