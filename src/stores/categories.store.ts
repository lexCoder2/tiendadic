import { action, makeAutoObservable } from 'mobx'
import { getAllCategories } from '../services/category.service'
import { CategoryType } from '../types/category.type'

export class CategoriesStore {
  categories: CategoryType[] = [
    {
      name: 'Papeleria',
      color: 'red',
      image: 'default-category.png',
    },
    {
      name: 'Abarrotes',
      color: 'red',
      image: 'default-category.png',
    },
    {
      name: 'Regalos',
      color: 'red',
      image: 'default-category.png',
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  @action
  getCategories() {
    getAllCategories().then((categories) => {
      this.categories = categories
    })
  }
}
