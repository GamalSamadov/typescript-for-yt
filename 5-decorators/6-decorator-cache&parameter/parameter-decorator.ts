function LogParam(
	target: Object,
	propertyKey: string | symbol,
	parameterIndex: number
) {
	console.log(
		String(`Method ${String(propertyKey)} parameter index: ${parameterIndex}`)
	)
}

class LogService {
	createLog(name: string, @LogParam id: string) {
		console.log(`Log created: ${name} - ${id}`)
	}
}
