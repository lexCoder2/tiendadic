import { Route, Routes } from 'react-router-dom'
import { Login } from './auth/login'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import ProductList from './pages/products/productsList.page'

export const RoutesApp =() => {
  return (
    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/login' element={<Login/> }/>
      <Route path='/register' element={<Home/> }/>
      <Route path='/dashboard' element={<Dashboard/>}>
        <Route path='products' index element={<ProductList/>}></Route>
      </Route>
    </Routes>
  )
}