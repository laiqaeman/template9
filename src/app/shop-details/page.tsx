import React from 'react'
import Shopdetail from '@/components/ShopPages/shop-detail/ShopDetail'
import Hero from './Hero'
import DescriptionComponent from '@/components/ShopPages/shop-detail/ShopDescription'
import SimilarProducts from '@/components/ShopPages/shop-detail/SimilarProducts'

const ShopDetails = () => {
  return (
    <div>
        {/* Hero section page */}
        <Hero />

        {/* Shop detail page */}
        <Shopdetail />

        {/* Description of Products page */}
        <DescriptionComponent/>

        {/* Similar products page */}
        <SimilarProducts/>
    </div>
  )
}

export default ShopDetails