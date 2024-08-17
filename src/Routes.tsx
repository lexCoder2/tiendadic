import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { Login } from './auth/login'
import { Home } from './pages/Home'
import { Dashboard } from './pages/dashboard.page'
import ProductList from './pages/products/productsList.page'
import AddProduct from './pages/products/productAdd.page'
import { Sell } from './pages/sell/sell.page'
import { RegisterPage } from './pages/register.page'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="products" element={<ProductList />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="sell" element={<Sell />} />
        <Route path="registers" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}
