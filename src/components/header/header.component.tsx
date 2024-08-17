import SearchBar from '../searchBar.component'
import Settings from './settings.components'
import './header.scss'

export default function Header() {
  return (
    <header>
      <h2>TIENDA</h2>
      <SearchBar />
      <Settings />
    </header>
  )
}
