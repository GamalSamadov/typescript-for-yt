function logger(msg: string | null) {
	if (msg === null) {
		console.log('No message provided')
	} else {
		console.log(msg.toLowerCase())
	}
}

logger('Hello, world!') // Output: Hello, world!
logger(null) // Output: No message provided
