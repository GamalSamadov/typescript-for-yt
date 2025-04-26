// Command Pattern Example with TurnON/TurnOFF functionality

interface Command {
	execute(): void
	// undo(): void
}

class Light {
	turnOn() {
		console.log('Light is ON')
	}

	turnOff() {
		console.log('Light is OFF')
	}
}

class TurnOnCommand implements Command {
	constructor(private light: Light) {}

	execute() {
		this.light.turnOn()
	}
}

class TurnOffCommand implements Command {
	constructor(private light: Light) {}

	execute() {
		this.light.turnOff()
	}
}

class RemoteControl {
	private command: Command

	setCommand(command: Command) {
		this.command = command
	}

	prestButton() {
		this.command.execute()
	}
}

const light = new Light()
const turnOnCommand = new TurnOnCommand(light)
const turnOffCommand = new TurnOffCommand(light)

const remote = new RemoteControl()

remote.setCommand(turnOnCommand)
remote.prestButton() // Light is ON

remote.setCommand(turnOffCommand)
remote.prestButton() // Light is OFF
