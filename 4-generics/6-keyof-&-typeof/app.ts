// const user = {
// 	name: 'John',
// 	age: 30,
// }

// type UserType = typeof user

// function logUser(user: UserType) {
// 	console.log(`User name is ${user.name} and age is ${user.age}`)
// }

// // keyof

// type UserKeys = keyof UserType // 'name' | 'age'

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
// 	return obj[key]
// }

// console.log(getProperty(user, 'name')) // John
// console.log(getProperty(user, 'age')) // 30
