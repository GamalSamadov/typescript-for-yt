const user2 = {
	name: 'John',
	age: 30,
}

type UserKeys2 = keyof typeof user2 // 'name' | 'age'
