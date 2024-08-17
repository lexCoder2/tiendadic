import { apiGet, apiPost } from './useFetch.service'

type CategoryType = {
  id?: number
  name: string
  image: string
  color: string
}

export const getAllCategories = () => apiGet('category')

export const createCategory = (category: CategoryType) => {
  return apiPost<CategoryType>('category', category)
}
