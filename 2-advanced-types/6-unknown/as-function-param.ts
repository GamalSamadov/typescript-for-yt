function loggerWithUnknownParam(value: unknown) {
	// return value.toString() // Error: Object is of type 'unknown'.
}

function loggerWithAnyParam(value: any) {
	return value.toString() // No error
}

function loggerWithUnknownReturnUnknown(value: unknown) {
	// we need to check the type of value before using it
	if (typeof value === 'string') return value.toUpperCase()
	else if (typeof value === 'number') return value.toFixed(2)
	else return value

	// returns unknown
}

function loggerWithUnknown(value: unknown) {
	// !!! when we use unknown, it's better to not return anything, just return void. So should not check the type of value when we call the function!!!
	if (typeof value === 'string') console.log(value.toUpperCase())
	else if (typeof value === 'number') console.log(value.toFixed(2))
	else console.log(value)
}

console.log(loggerWithUnknown('Hello world')) // Hello world
console.log(loggerWithUnknown(123.3232)) // 123
