// import { Db, MongoClient } from 'mongodb'

// class MongoConnection {
// 	private static instance: MongoConnection
// 	private client: MongoClient
// 	private db: Db | null = null

// 	private constructor() {
// 		this.client = new MongoClient('mongodb://localhost:27017')
// 	}

// 	static getInstance(): MongoConnection {
// 		if (!this.instance) {
// 			this.instance = new MongoConnection()
// 		}
// 		return this.instance
// 	}

// 	async connect(): Promise<Db> {
// 		if (this.db) {
// 			console.log('Already connected to the database')
// 			return this.db
// 		}

// 		console.log('Connecting to the database...')
// 		await this.client.connect()

// 		this.db = this.client.db('mydatabase')
// 		console.log('Connected to the database')
// 		return this.db
// 	}
// }

// async function bootstrap() {
// 	const mongo1 = MongoConnection.getInstance()
// 	const mongo2 = MongoConnection.getInstance()

// 	await mongo1.connect()
// 	await mongo2.connect()
// }

// bootstrap()
