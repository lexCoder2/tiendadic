import { Permitions } from './permitions'

export default class User {
  name: string
  type: Permitions

  constructor (name: string = '', type: Permitions = Permitions.VISITOR) {
    this.name = name
    this.type = type 
    
  }
}