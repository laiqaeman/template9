"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Chicken Burger', price: 5.00, image: '/shop-detail/categ1.png' },
  { id: 2, name: 'Veggie Pizza', price: 7.50, image: '/shop-detail/categ2.png' },
  { id: 3, name: 'Beef Taco', price: 6.00, image: '/shop-detail/categ3.png' },
  { id: 4, name: 'Cheese Fries', price: 4.00, image: '/shop-detail/categ4.png' }
];

const SimilarProducts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = direction === 'left' ? -312 : 312;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl md:text-2xl font-bold">Similar Products</h3>
        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            onClick={() => scroll('left')}
            className="p-2 hover:bg-gray-100 transition-colors duration-200 rounded-full"
            variant="outline"
            size="icon"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button 
            onClick={() => scroll('right')}
            className="p-2 bg-[#FF9F0D] hover:bg-[#e88f0c] transition-colors duration-200 rounded-full"
            size="icon"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-[280px] md:w-[312px] snap-center group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={500} // Arbitrary width for responsive behavior
                height={500} // Arbitrary height for responsive behavior
                layout="intrinsic" // Ensures responsiveness based on content
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-center text-sm md:text-base font-medium">{product.name}</p>
              <p className="text-center text-lg md:text-xl font-bold">${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
