"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!res.ok) throw new Error("Failed to fetch from FakeStoreAPI");
  
          const data = await res.json();
          if (!data) {
            throw new Error("Empty or invalid response from FakeStoreAPI");
          }
          setProduct(data);
        } catch (error) {
          console.error("Error fetching from FakeStoreAPI:", error.message);
  
          // If the first API fails, fallback to the dummy API
          try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setProduct(data); 
          } catch (fallbackError) {
            console.error("Error fetching from DummyJSON API:", fallbackError.message);
          }
        }
      };
      fetchProduct();
    }
  }, [id]);
  

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-md rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex justify-center items-center bg-gray-100 p-6 rounded-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-96 h-96 object-contain"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
        <div>
          <motion.h1
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {product.title}
          </motion.h1>
          <motion.p
            className="text-2xl font-semibold text-red-500 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            ${product.price.toFixed(2)}
          </motion.p>
          <motion.p
            className="text-gray-700 text-lg mb-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {product.description}
          </motion.p>
          <motion.div
            className="text-lg text-gray-600 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p>
              Category: <span className="font-medium">{product.category}</span>
            </p>
            <p>
              Rating: <span className="font-medium">{product.rating.rate} ★</span> (
              {product.rating.count} reviews)
            </p>
          </motion.div>
          <motion.button
            className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPage;
