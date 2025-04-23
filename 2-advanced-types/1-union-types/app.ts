let value: string | number = 1

function getValue(value: string | number): string | number {
	// type narrowing - turlarni aniqlash

	if (typeof value === 'string') return value.toUpperCase()
	return value.toFixed(2)
}

function logError(error: string | string[]) {
	// type narrowing - turlarni aniqlash

	if (Array.isArray(error)) error.forEach(err => console.log(err))
	else console.log(error)
}

function logErrorsObj(error: { message: string } | { error: string }) {
	// type narrowing - turlarni aniqlash

	if ('message' in error) console.log(error.message)
	else console.log(error.error)
}

let data: (string | number)[] = [1, 2, 3, '4', '5', 6]
