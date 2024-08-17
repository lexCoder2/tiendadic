import { observer } from 'mobx-react'
import { useState } from 'react'

function SearchBarView() {
  const [search, setSearch] = useState('')

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <img src="/searchIcon.svg" className="icon search" alt="" />
      <div> results: </div>
    </div>
  )
}

const SearchBar = observer(SearchBarView)

export default SearchBar
