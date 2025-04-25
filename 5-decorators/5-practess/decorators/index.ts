// 1. CreatedAt
export function CreatedAt<TBase extends { new (...args: any[]): {} }>(
	constructor: TBase
) {
	return class extends constructor {
		readonly createdAt: Date = new Date()
	}
}

// 2. LogMethod
export function LogMethod(
	target: Object,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	const originalMethod = descriptor.value
	descriptor.value = function (...args: any[]) {
		console.log(`Calling ${propertyKey} with args: ${args}: ${new Date()}`)
		return originalMethod.apply(this, args)
	}
}
