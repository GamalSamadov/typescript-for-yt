class OldPrinter {
	print(text: string) {
		console.log(`Old Printer: ${text}`)
	}
} // old printer Legacy code

interface NewPrinter {
	print(document: string): void
}

class PrinterAdapter implements NewPrinter {
	constructor(private oldPrinter: OldPrinter) {}

	print(document: string): void {
		this.oldPrinter.print(document)
	}
} // new printer interface

const adapter = new PrinterAdapter(new OldPrinter())

adapter.print('Hello World!') // Old Printer: Hello World!

// Use cases: changing the old implementation to a new one
// 1. You have a legacy code that you cannot change, but you want to use it in a new system.
// 2. You want to use a new implementation, but you want to keep the old one for backward compatibility.
