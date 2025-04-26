export interface IDocumentService {
	readDocument(): void // works only with admin
}

class Document implements IDocumentService {
	readDocument(): void {
		console.log('Document read')
	}
}

class DocumentProxy implements IDocumentService {
	private document: Document

	constructor(private userRole: string) {
		this.document = new Document()
	}

	readDocument(): void {
		if (this.userRole !== 'admin') {
			console.error('Access denied')
		}

		this.document.readDocument()
	}
}

const admin = new DocumentProxy('admin')
admin.readDocument() // Document read

const user = new DocumentProxy('user')
user.readDocument() // Error: 'Access denied'
