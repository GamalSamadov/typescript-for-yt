const config = {
	host: 'localhost',
	port: 8080,
	protocol: 'http',
}

type ConfigKeys = keyof typeof config // 'host' | 'port' | 'protocol'

function getConfigValue(key: ConfigKeys): string | number {
	return config[key]
}

console.log(getConfigValue('host')) // localhost
console.log(getConfigValue('port')) // 8080
