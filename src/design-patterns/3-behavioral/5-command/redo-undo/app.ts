import { AddTextCommand } from './commands/add-text.command'
import { TextEditor } from './text-editor'

const editor = new TextEditor()

const undoStack: AddTextCommand[] = []
const redoStack: AddTextCommand[] = []

function runCommand(command: AddTextCommand) {
	command.execute()
	undoStack.push(command)
	redoStack.length = 0 // Clear the redo stack
}

function undo() {
	const command = undoStack.pop()
	if (command) {
		command.undo()
		redoStack.push(command)
	}
}

function redo() {
	const command = redoStack.pop()
	if (command) {
		command.execute()
		undoStack.push(command)
	}
}

runCommand(new AddTextCommand(editor, 'Hello'))
runCommand(new AddTextCommand(editor, 'World'))

console.log(editor.getContent()) // HelloWorld

undo()

console.log(editor.getContent()) // Hello

redo()

console.log(editor.getContent()) // HelloWorld
