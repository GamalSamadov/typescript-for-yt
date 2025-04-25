import { Product } from './models/product'
import { User } from './models/user'
import { TProduct, TUser } from './types/createdAt'

const product = new Product('Laptop', 1000) as TProduct
const user = new User('John Doe', 30) as TUser

product.getInfo()
user.getInfo()
