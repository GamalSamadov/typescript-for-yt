import { Command } from '../interfaces/command.interface'
import { TextEditor } from '../text-editor'

export class AddTextCommand implements Command {
	private lastTest: string = ''

	constructor(private editor: TextEditor, private text: string) {}

	execute(): void {
		this.lastTest = this.text
		this.editor.write(this.text)
	}

	undo(): void {
		this.editor.delete(this.lastTest.length)
	}
}
