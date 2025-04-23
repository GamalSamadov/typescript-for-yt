export enum Role {
	ADMIN,
	STUDENT,
}

export interface IUser {
	id: number
	name: string
	role: Role
}

export interface ICourse {
	id: number
	title: string
	description: string
	students: IUser[]
}
