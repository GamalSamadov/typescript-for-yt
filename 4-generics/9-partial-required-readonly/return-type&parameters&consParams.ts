function calc(a: number, b: number): number {
	return a + b
}

type CalcType = ReturnType<typeof calc> //

type CalcParams = Parameters<typeof calc> // [number, number]

class Example {
	constructor(a: number, b: number) {}
}

type ExampleConstructorParams = ConstructorParameters<typeof Example> // [number, number]

async function fetchData(): Promise<string> {
	return 'data'
}

type FetchDataReturnType = Awaited<ReturnType<typeof fetchData>> // string
