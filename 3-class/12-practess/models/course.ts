import { User } from './user'
import { Role } from '../enums/role'

export class Course {
	constructor(
		public id: number,
		public title: string,
		public description: string,
		private students: User[] = []
	) {}

	get studentList(): string {
		return this.students.map(student => student.name).join(', ')
	}

	enrollStudent(student: User): void {
		if (student.role === Role.STUDENT) {
			this.students.push(student)
			console.log(`Student ${student.name} enrolled in course ${this.title}`)
		} else {
			console.log(
				`User ${student.name} is not a student and cannot enroll in the course`
			)
		}
	}
}
