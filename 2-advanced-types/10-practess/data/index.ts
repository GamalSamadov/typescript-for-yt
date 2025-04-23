import { ICourse, IUser, Role } from '../types'

export const admin: IUser = { id: 1, name: 'Admin', role: Role.STUDENT }
export const student_one: IUser = {
	id: 2,
	name: 'Student One',
	role: Role.STUDENT,
}
export const student_two: IUser = {
	id: 3,
	name: 'Student Two',
	role: Role.STUDENT,
}
export const course_one: ICourse = {
	id: 1,
	title: 'Course One',
	description: 'Description One',
	students: [],
}
