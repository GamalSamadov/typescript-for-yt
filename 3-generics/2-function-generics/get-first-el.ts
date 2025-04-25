function getFirstElementOFArr<T>(arr: T[]): T {
	return arr[0]
}

const firstNumber = getFirstElementOFArr<number>([1, 2, 3])
const firstString = getFirstElementOFArr<string>(['a', 'b', 'c'])
