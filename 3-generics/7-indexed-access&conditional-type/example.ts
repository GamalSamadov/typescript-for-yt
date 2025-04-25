type GetPropType<T, K extends keyof T> = T[K]

type User = { name: string; age: string }

type NameType = GetPropType<User, 'name'> // string
