import { debounce } from 'lodash'
import { action, makeAutoObservable } from 'mobx'

export class SearchStore {
  searchString = ''
  constructor() {
    makeAutoObservable(this)
  }

  @action search = debounce((searchQuery, opt = {}) => {
    this.searchString = searchQuery
  }, 400)
}
