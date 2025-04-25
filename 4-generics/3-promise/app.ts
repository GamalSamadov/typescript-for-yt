// interface IUser {
// 	id: number
// 	name: string
// 	username: string
// 	email: string
// }

// interface IPost {
// 	id: number
// 	title: string
// 	body: string
// 	userId: number
// }

// async function fetchData<T>(endpoint: string): Promise<T> {
// 	const response = await fetch(
// 		`https://jsonplaceholder.typicode.com/${endpoint}`
// 	)
// 	if (!response.ok) {
// 		throw new Error('Network response was not ok')
// 	}
// 	const data: T = await response.json()

// 	return data
// }

// async function getUsers() {
// 	const data = await fetchData<IUser[]>('users')
// 	data.forEach(user => console.log(user.name))
// }

// async function getPosts() {
// 	const data = await fetchData<IPost[]>('posts')
// 	data.forEach(post => console.log(post.title))
// }

// getUsers()
// getPosts()
