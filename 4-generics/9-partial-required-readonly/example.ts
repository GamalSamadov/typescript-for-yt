interface IAnimal {
	name: string
	species: string
}

interface IPlant {
	name: string
	color: string
}

type CommonProperties = Extract<keyof IAnimal, keyof IPlant>
