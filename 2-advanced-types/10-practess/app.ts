import { courses } from './constants'
import { admin, course_one, student_one, student_two } from './data'
import { addCourse, enrollStudent } from './helpers'

addCourse(admin, course_one)

enrollStudent(student_one, course_one.id)

enrollStudent(student_two, course_one.id)

console.log(courses)
