'use client'

import { CartProvider as CartContextProvider } from 'react-use-cart';

export default function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
