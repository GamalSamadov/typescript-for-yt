type IsBoolean<T> = T extends boolean ? 'yes' : 'no'

interface IAdmin {
	role: 'admin'
	access: true
}

interface IGuest {
	role: 'guest'
	access: false
}

type RoleAccess<T> = T extends { role: 'admin' } ? true : false

type AdminAccess = RoleAccess<IAdmin> // true
type GuestAccess = RoleAccess<IGuest> // false
