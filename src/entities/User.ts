import { Roles } from './roles'

export default class User {
  name: string
  type: Roles

  constructor (name: string = '', type: Roles = Roles.VISITOR) {
    this.name = name
    this.type = type 
    
  }
}