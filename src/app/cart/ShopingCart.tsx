'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: "/cart1.png" },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/cart2.png" },
  { name: "Pizza", price: 9.99, quantity: 4, image: "/cart3.png" },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/cart4.png" },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/cart5.png" },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  // Mobile card view for each item
  interface CartItem {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  interface CartItemCardProps {
    item: CartItem;
    index: number;
  }

  const CartItemCard: React.FC<CartItemCardProps> = ({ item, index }) => (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Image 
            src={item.image} 
            alt={item.name}
            width={64} 
            height={64} 
            className="rounded-md object-cover"
          />
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <button 
          onClick={() => handleRemoveItem(index)}
          className="text-red-500 hover:text-red-700"
        >
          ×
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Qty:</span>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
            className="w-20 text-center"
            min="0"
          />
        </div>
        <span className="font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* <header className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 sm:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Shopping Cart
          </h1>
        </div>
      </header> */}

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Quantity</th>
                <th className="p-4 font-semibold">Total</th>
                <th className="p-4 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center space-x-4">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={48} 
                        height={48} 
                        className="rounded-md object-cover"
                      />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                      className="w-20 text-center"
                      min="0"
                    />
                  </td>
                  <td className="p-4 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => handleRemoveItem(index)}
                      className="text-red-500 hover:text-red-700 text-xl"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {cartItems.map((item, index) => (
            <CartItemCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Cart Summary Section */}
        <div className="mt-8 space-y-6 lg:space-y-0 lg:flex lg:space-x-8">
          {/* Coupon Section */}
          <div className="lg:flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Have a Coupon?</h2>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1"
                />
                <Button 
                  onClick={handleApplyCoupon}
                  className="bg-orange-500 hover:bg-orange-600"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Discount</span>
                  <span>-${(cartSubtotal * discount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shippingCharges.toFixed(2)}</span>
                </div>
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 mt-6">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;