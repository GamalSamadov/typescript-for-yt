import { Product } from '../models/product'
import { User } from '../models/user'

type CreatedEntity = { createdAt: Date }

export type TProduct = Product & CreatedEntity
export type TUser = User & CreatedEntity
