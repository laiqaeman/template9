import React from 'react'
import Hero from '@/components/ShopPages/ShopHero';
import ShopProducts from './shop';
export default function Shop() {
  return (
    <div className="bg-grey-900">
        <Hero />
        <ShopProducts />
    </div>
  )
}
