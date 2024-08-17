import { Outlet } from 'react-router-dom'
import { Aside } from '../components/menu/aside.component'
import './dashboard.scss'
import Header from '../components/header/header.component'
import { observer } from 'mobx-react'

const DashboardView = () => {
  return (
    <div className="main-container">
      <Aside />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
const Dashboard = observer(DashboardView)
export { Dashboard }
