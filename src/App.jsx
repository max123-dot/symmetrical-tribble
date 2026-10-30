import HeroSection from './Componenets/HeroSection'
import { AvailableStock } from './Componenets/Totebages'
import TotebagesHome from './Componenets/ProductCard'
import ProductPage from './Componenets/ProductPage'
import ShoppingCart from './Componenets/ShoppingCart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Componenets/CartContext'
import Layout from './Componenets/Layout'
import './App.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AvailableStock />
                  <TotebagesHome />
                </>
              }
            />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
