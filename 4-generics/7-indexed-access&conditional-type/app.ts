// // type User = {
// // 	id: number
// // 	name: string
// // 	email: string
// // 	age: number
// // }

// // type UserName = User['name'] // string

// const user = {
// 	id: 1,
// 	name: 'John',
// 	age: 30,
// 	isMarried: false,
// }

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
// 	return obj[key]
// }

// const userName = getProperty(user, 'name') // string
// const userAge = getProperty(user, 'age') // number

// // Indexed access types - tipdan property turini olish - User['name'] => string
// // Conditional types - tipdan property turini olish - User extends { name: string } ? string : never
