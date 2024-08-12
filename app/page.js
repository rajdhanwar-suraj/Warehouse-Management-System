"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch from FakeStoreAPI");
      }
      const data = await res.json();
      if (!data || data.length === 0) {
        throw new Error("Empty or invalid response from FakeStoreAPI");
      }
      setProducts(data);
    } catch (error) {
      console.error("Error fetching from FakeStoreAPI:", error.message);
      // If the first API fails, fallback to the dummy API
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products); 
      } catch (fallbackError) {
        console.error("Error fetching from DummyJSON API:", fallbackError.message);
      }
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);
  




  const toggleLike = (id) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [id]: !prevLiked[id],
    }));
  };

  return (
    <div>
      {/* Navbar */}
      <motion.header
        className="bg-black text-white p-4 shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Warehouse Management System</h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="container mx-auto p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: 50,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <motion.div
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer transition-all hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ height: "380px" }}
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h2
                  className="text-lg font-semibold text-gray-800 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.title.substr(0, 50)}
                </motion.h2>
                <motion.div
                  className="flex justify-between items-center mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-md text-gray-600 font-medium">
                    ${product.price.toFixed(2)}
                  </p>
                  {/* Heart Icon */}
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLike(product.id);
                    }}
                    className="text-2xl cursor-pointer"
                  >
                    {liked[product.id] ? (
                      <AiFillHeart className="text-red-500" />
                    ) : (
                      <AiOutlineHeart className="text-black" />
                    )}
                  </div>
                </motion.div>
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <span className="text-sm text-gray-500">
                    Category: {product.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    Rating: {product.rating.rate} ★ ({product.rating.count})
                  </span>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
      
       {/* Footer */}
       <footer className="bg-black text-white p-4 shadow-lg mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">Made with ♥ by Suraj Sharma.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
