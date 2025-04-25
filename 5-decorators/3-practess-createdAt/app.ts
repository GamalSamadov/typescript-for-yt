// // 1. Decorator
// function CreatedAt<TBase extends { new (...args: any[]): {} }>(
// 	constructor: TBase
// ) {
// 	return class extends constructor {
// 		readonly createdAt: Date = new Date()
// 	}
// }

// // 2. Course Class
// @CreatedAt
// class Course {
// 	constructor(public name: string = 'TS', public expert: string = 'Learn ts') {}
// }

// @CreatedAt
// class Lesson {
// 	constructor(
// 		public name: string = 'TS',
// 		public content: string = 'Learn ts'
// 	) {}
// }

// // 4. Type assertion
// type CreatedEntity = { createdAt: Date }

// const course = new Course('TS', 'Learn ts') as Course & CreatedEntity
// const lesson = new Lesson('TS', 'Learn ts') as Lesson & CreatedEntity

// console.log(course.createdAt) // 2023-10-01T12:00:00.000Z
// console.log(lesson.createdAt) // 2023-10-01T12:00:00.000Z
