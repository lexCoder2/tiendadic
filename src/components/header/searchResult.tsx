import { useStore } from '../../useStore'
import { observer } from 'mobx-react'
import './search.scss'
import DotsLoading from '../dotsLoading.component'
function SearchResultView() {
  const { searchStore } = useStore()
  const setNewProduct = (id: number) => {
    console.log('cliekced', id)
    searchStore.setItemId(id)
  }
  return (
    <div
      className="search-result-box"
      style={{ display: searchStore.searching ? 'block' : 'none' }}
    >
      {searchStore.loading ? (
        <div className="center">
          <DotsLoading />
        </div>
      ) : searchStore.listResult.length == 0 ? (
        <span className="center">No items found</span>
      ) : (
        searchStore.listResult.map((item, i) => (
          <div
            autoFocus={i == 0}
            onClick={() => setNewProduct(item.id)}
            className={`result-item`}
            key={item.id}
          >
            {item.text}
          </div>
        ))
      )}
    </div>
  )
}

const SearchResult = observer(SearchResultView)
export default SearchResult
