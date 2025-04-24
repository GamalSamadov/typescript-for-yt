import { User } from './user'
import { Role } from '../enums/role'
import { Course } from './course'

export class Admin extends User {
	constructor(id: number, name: string) {
		super(id, name, Role.ADMIN)
	}

	enroll(course: Course) {
		course.enrollStudent(this)
	}

	addCourse(course: Course, courses: Course[]): void {
		courses.push(course)
		console.log(`Course ${course.title} added by admin ${this.name}`)
	}

	getStudentList(course: Course): void {
		console.log(
			`Student list for course ${course.title}: ${course.studentList}`
		)
	}
}
