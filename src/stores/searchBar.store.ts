import { action, makeAutoObservable } from 'mobx'
export type searchType = 'product' | 'register' | ''

type searchListItem = {
  text: string
  id: number
}
export class SearchStore {
  searchString = ''
  searchQuery = ''
  private df = 0
  searching = false
  listResult: searchListItem[] = []
  itemId = 0
  loading = false
  constructor() {
    makeAutoObservable(this)
  }

  @action
  setItemId(id: number) {
    this.itemId = id
  }

  @action
  setSearchList(list: searchListItem[]) {
    this.listResult = list
  }

  @action
  setQuery(querystring: string) {
    this.searchQuery = querystring
  }

  @action
  search = (searchQuery: string) => {
    this.loading = this.searchString.length > 0
    this.searchString = searchQuery
    this.searching = this.searchString.length > 0
    clearTimeout(this.df)
    this.df = setTimeout(() => {
      this.loading = false
      this.setQuery(searchQuery)
    }, 900)
  }
}
