enum Roles {
	ADMIN,
	USER,
}

type UserRoles = Record<string, number>

const roles: UserRoles = {
	sam: 1,
	// john: "2", // Error: Type 'string' is not assignable to type 'number'.
	doe: Roles.ADMIN,
}
