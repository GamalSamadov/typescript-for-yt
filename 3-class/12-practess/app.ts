import { Admin } from './models/admin'
import { Course } from './models/course'
import { Student } from './models/student'

const courses: Course[] = []

const admin = new Admin(1, 'Admin')

const student_one = new Student(2, 'Student One')
const student_two = new Student(3, 'Student Two')

const math_course = new Course(1, 'Math', 'Math course description')
const english_course = new Course(2, 'English', 'English course description')

admin.addCourse(math_course, courses)
admin.addCourse(english_course, courses)

student_one.enroll(math_course)
student_two.enroll(math_course)

admin.getStudentList(math_course)
