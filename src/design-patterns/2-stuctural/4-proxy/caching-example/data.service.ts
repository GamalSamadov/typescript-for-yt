interface IDataService {
	fetchData(id: number): string
}

class DataService implements IDataService {
	fetchData(id: number): string {
		console.log(`Fetching data ${id} from the server...`)
		return `Data from server ${id}`
	}
}

class DataServiceProxy implements IDataService {
	private dataService: DataService
	private cache: Map<number, string> = new Map()

	constructor() {
		this.dataService = new DataService()
	}

	fetchData(id: number): string {
		if (this.cache.has(id)) {
			console.log(`Fetching data ${id} from cache...`)
			return this.cache.get(id)!
		}

		const data = this.dataService.fetchData(id)
		this.cache.set(id, data)
		return data
	}
}

const proxy = new DataServiceProxy()

console.log(proxy.fetchData(1)) // Fetching data 1 from the server...
console.log(proxy.fetchData(1)) // Fetching data 1 from cache...
