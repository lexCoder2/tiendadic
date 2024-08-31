import { observer } from 'mobx-react'
import { FocusEvent, useContext } from 'react'
import { StoreContext } from '../../store.context'
import SearchResult from './searchResult'
import { action } from 'mobx'

function SearchBarView() {
  const { searchStore } = useContext(StoreContext)
  const onLostFocus = () => {
    setTimeout(
      action(() => (searchStore.searching = false)),
      300
    )
  }
  const focus = (e: FocusEvent<HTMLInputElement>) => {
    action(() => (searchStore.searching = searchStore.searchQuery.length > 0))()
    e.target.select()
  }
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        value={searchStore.searchString}
        onChange={(e) => searchStore.search(e.target.value)}
        onBlur={onLostFocus}
        onFocus={focus}
      ></input>
      <img src="/searchIcon.svg" className="icon search" alt="" />
      <SearchResult />
    </div>
  )
}

const SearchBar = observer(SearchBarView)

export default SearchBar
