class Animal {
	id: number
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	make_sound() {
		console.log(`${this.name} makes a noise`)
	}

	show_info() {
		console.log(`ID: ${this.id}, Name: ${this.name}`)
	}
}

class Cat extends Animal {
	constructor(name: string) {
		const id = Math.random() * 100
		super(id, name)
	}

	make_sound() {
		super.make_sound()
		console.log(`${this.name} says meow`)
	}
}

const cat = new Cat('Tom')

cat.show_info() // ID: 12.345678, Name: Tom
