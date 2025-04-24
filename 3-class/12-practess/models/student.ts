import { Role } from '../enums/role'
import { Course } from './course'
import { User } from './user'

export class Student extends User {
	constructor(id: number, name: string) {
		super(id, name, Role.STUDENT)
	}

	enroll(course: Course) {
		course.enrollStudent(this)
	}
}
