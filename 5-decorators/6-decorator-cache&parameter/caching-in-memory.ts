function CacheResult(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value
	const cache = new Map<string, any>()

	descriptor.value = function (...args: any[]) {
		const key = JSON.stringify(args)

		if (cache.has(key)) {
			console.log(`Cache hit for ${String(propertyKey)} with args: ${key}`)
			return cache.get(key)
		}

		const result = originalMethod.apply(this, args)
		cache.set(key, result)
		console.log(`Result cached for ${String(propertyKey)} with args: ${key}`)
		return result
	}
	return descriptor
}

class MathService {
	@CacheResult
	factorial(n: number): number {
		if (n <= 1) {
			return 1
		}
		return n * this.factorial(n - 1)
	}
}

const mathService = new MathService()
console.log(mathService.factorial(5)) // 120
console.log(mathService.factorial(5)) // 120 (cached)
console.log(mathService.factorial(6)) // 720
console.log(mathService.factorial(6)) // 720 (cached)
