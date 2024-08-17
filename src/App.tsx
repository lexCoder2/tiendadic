
import { observer } from 'mobx-react';
import { RoutesApp } from './Routes'

function AppView() {
  return <RoutesApp />
}

const App = observer(AppView)
export default App
