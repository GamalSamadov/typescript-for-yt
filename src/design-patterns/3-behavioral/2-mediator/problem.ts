// // User sends a message to the group. All the users in the group receive the message by getting notification.

// // Implementation, basic (with a problem)
// class UserModel {
// 	private users: UserModel[]
// 	constructor(public name: string) {}

// 	setUsers(users: UserModel[]) {
// 		this.users = users
// 	}

// 	send(message: string) {
// 		console.log(`User ${this.name} sent message: ${message}`)
// 		for (const user of this.users) {
// 			if (user !== this) {
// 				user.receive(message, this.name)
// 			}
// 		}
// 	}

// 	receive(message: string, from: string) {
// 		console.log(`User ${this.name} received message: ${message} from ${from}`)
// 	}

// 	getName(): string {
// 		return this.name
// 	}
// }

// const ali = new UserModel('Ali')
// const ahmed = new UserModel('Ahmed')
// const mohamed = new UserModel('Mohamed')

// const allUsers = [ali, ahmed, mohamed]

// ali.setUsers(allUsers)
// ahmed.setUsers(allUsers)
// mohamed.setUsers(allUsers) // repeat problem!!! what if we have 10 users? what if we have 100 users? 1000???

// ali.send('Hello Ahmed')
