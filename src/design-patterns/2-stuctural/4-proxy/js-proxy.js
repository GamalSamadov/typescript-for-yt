const user = { name: 'Sammi' }

const proxy = new Proxy(user, {
	get(target, prop) {
		console.log(`Getting ${prop}`)
		console.log(`Target: ${target}`)
		return target[prop]
	},
})

console.log(proxy.name) // Getting name
