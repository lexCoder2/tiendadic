import { Outlet } from 'react-router-dom'
import { Aside } from '../Components/menu/aside'
import './dashboard.css'
import Header from '../Components/header/header.component'

export const Dashboard = () => {
  return (
    <div className='main-container'>
    <Aside /> 
    <main>
      <Header/>
      <Outlet/>
    </main>
    </div>
  )
}