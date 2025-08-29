import React, { useState, useEffect } from 'react';

function Product() {
  const [products, setProducts] = useState([]);

  const APIfetch = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    APIfetch();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-6xl text-center mb-9">Product Catalog</h1>
      <p className="text-center text-gray-500 mb-8">Discover amazing products</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
          >
            
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <a
              href="#"
              className="text-blue-500 text-sm mb-2"
            >
              {product.brand}
            </a>

            <p className="text-gray-600 text-sm flex-1">
              {product.description.length > 100
                ? product.description.slice(0, 100) + '...'
                : product.description}
            </p>
            
            <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              BUY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
