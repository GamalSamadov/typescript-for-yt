interface ChatMediator {
	sendMessage(message: string, from: UserModel): void
	addUser(user: UserModel): void
}

class UserModel {
	constructor(public name: string, private mediator: ChatMediator) {}

	send(message: string) {
		console.log(`${this.name} sends: ${message}`)
		this.mediator.sendMessage(message, this)
	}

	receive(message: string, from: string) {
		console.log(`${this.name} received: ${message} from ${from}`)
	}

	getName(): string {
		return this.name
	}
}

class ChatRoom implements ChatMediator {
	private users: UserModel[] = []

	sendMessage(message: string, from: UserModel): void {
		for (const user of this.users) {
			if (user !== from) {
				user.receive(message, from.getName())
			}
		}
	}

	addUser(user: UserModel): void {
		this.users.push(user)
	}
}

const semmiChat = new ChatRoom()

const ali = new UserModel('Ali', semmiChat)
const mehdi = new UserModel('Mehdi', semmiChat)
const behzad = new UserModel('Behzad', semmiChat)
const arash = new UserModel('Arash', semmiChat)

semmiChat.addUser(ali)
semmiChat.addUser(mehdi)
semmiChat.addUser(behzad)
semmiChat.addUser(arash)

ali.send('Hello everyone!')
