"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import Image from "next/image";

// ✅ Sanity Client Setup
const sanity = createClient({
  projectId: "dz1gnr4a", // Tumhara Sanity Project ID
  dataset: "production", // Tumhara dataset name
  apiVersion: "2023-01-01", // API Version
  useCdn: true,
});

// ✅ Interface (Schema ke Mutabiq)
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  tags: string[];
}

interface Chef {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // ✅ Data Fetching from Sanity
  const fetchData = async () => {
    try {
      // Fetch Food Data
      const foodQuery = `*[_type == "food"]{
        _id,
        name,
        price,
        description,
        "imageUrl": image.asset->url,
        tags
      }`;
      const foodData = await sanity.fetch(foodQuery);
      setProducts(foodData);

      // Fetch Chef Data
      const chefQuery = `*[_type == "chef"]{
        _id,
        name,
        position,
        experience,
        specialty,
        "imageUrl": image.asset->url,
        description,
        available
      }`;
      const chefData = await sanity.fetch(chefQuery);
      setChefs(chefData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Cart Functions
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  // ✅ Description Truncation
  function truncateDescription(description: string, maxLength = 50) {
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  }

  if (products.length === 0 && chefs.length === 0) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Food & Chef Items</h2>

      {/* Food Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto mb-4"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-semibold">${product.price}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-400 text-slate-950 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chef Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {chefs.map((chef) => (
          <div
            key={chef._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={chef.imageUrl}
              alt={chef.name}
              width={300}
              height={300}
              className="w-full h-auto mb-4"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{chef.name}</h2>
              <p className="text-slate-800 mt-2 text-sm">{chef.position}</p>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(chef.description)}
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Experience: {chef.experience} years</p>
                <p className="text-sm text-gray-600">Specialty: {chef.specialty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-950">{item.name}</p>
                  <p className="text-sm text-blue-800">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your cart is empty. Please add a product.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
