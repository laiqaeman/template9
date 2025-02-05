import React from 'react'
// import HeroSection from '../Components/HeroSection'
import CartProvider from '../cart/CartProvider'
import ShopProduct from '@/components/shopProduct'

const Page = () => {
  return (
    <div>
       {/* <HeroSection title='Our Shop' homeLink='/' currentPage='Shop ' backgroundImage='/starbg.png'  /> */}
<CartProvider>
      <ShopProduct/>
      </CartProvider>
    </div>
  )
}

export default Page