type TFormData = {
	email: string
	password: string
	name: string
}

type TFormErrorType = {
	[key: string]: string | undefined
	email?: string
	password?: string
	name?: string
}

function validateFormData<T extends TFormData>(data: T): TFormErrorType {
	const errors: TFormErrorType = {}

	if (!data.email) {
		errors.email = 'Email is required'
	} else if (!/\S+@\S+\.\S+/.test(data.email)) {
		errors.email = 'Email is invalid'
	}

	if (!data.password) {
		errors.password = 'Password is required'
	} else if (data.password.length < 6) {
		errors.password = 'Password must be at least 6 characters long'
	}

	if (!data.name) {
		errors.name = 'Name is required'
	} else if (data.name.length < 2) {
		errors.name = 'Name must be at least 2 characters long'
	}

	return errors
}

const formData: TFormData = {
	email: 'test@gmail.co',
	password: '123',
	name: 'A',
}

console.log(validateFormData(formData))

type IsEmailValid<T> = T extends { email: string } ? true : false

function isEmailValid<T extends TFormData>(data: T): IsEmailValid<T> {
	return !/\S+@\S+\.\S+/.test(data.email) as IsEmailValid<T>
}

const isValidEmail = isEmailValid(formData)
console.log(isValidEmail) // true

type TDynamicFormData = {
	[key: string]: string
}

function validateDynamicFormData<T extends TDynamicFormData>(
	data: T
): TFormErrorType {
	const errors: TFormErrorType = {}

	Object.keys(data).forEach(key => {
		if (!data[key]) {
			errors[key] = `${key} is required`
		}
	})

	return errors
}

const dynamicFormData: TDynamicFormData = {
	email: '',
}

console.log(validateDynamicFormData(dynamicFormData)) // { email: 'email is required' }
