import { courses } from '../constants'
import { ICourse, IUser, Role } from '../types'

// Role checking
function isAdmin(user: IUser): user is IUser & { role: Role.ADMIN } {
	return user.role === Role.ADMIN
}

// Add course
export function addCourse(user: IUser, course: ICourse) {
	if (isAdmin(user)) {
		courses.push(course)
		console.log(`Course added: ${course.title}`)
	} else {
		console.log('Only admin can add course')
	}
}

// enroll student
export function enrollStudent(user: IUser, courseId: number) {
	const course = courses.find(course => course.id === courseId)

	if (!course) {
		console.log('Course not found')
		return
	}

	if (user.role === Role.STUDENT) {
		course.students.push(user)
		console.log(`Student ${user.name} enrolled in course ${course.title}`)
	} else {
		console.log('Only students can be enrolled')
	}
}

// Student List
export function listStudent(user: IUser, courseId: number) {
	if (!isAdmin(user)) {
		console.log('Only admin can list students')
		return
	}

	const course = courses.find(course => course.id === courseId)

	if (!course) {
		console.log('Course not found')
		return
	}
	console.log(`Students in course ${course.title}:`)
}
