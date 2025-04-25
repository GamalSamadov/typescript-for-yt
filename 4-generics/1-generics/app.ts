function identityNumber(arg: number): number {
	return arg
}

function identity<T>(arg: T): T {
	return arg
}

const numbers: Array<number> = [1, 2, 3]

// interface IUser {
// 	name: string
// 	age: number
// }

// const users: Array<IUser> = [
// 	{ name: 'John', age: 30 },
// 	{ name: 'Doe', age: 25 },
// ]

// const users2: IUser[] = [
// 	{ name: 'John', age: 30 },
// 	{ name: 'Doe', age: 25 },
// ] // same as above
