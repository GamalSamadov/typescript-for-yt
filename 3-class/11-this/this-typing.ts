class User3 {
	name: string = 'john'

	log(this: User3) {
		console.log(this.name)
	}
}
