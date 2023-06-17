import React, { useEffect } from "react";
import axios from "axios";
import { useProduct } from "../../zustandStore/useProduct";
import { db } from "../../firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";

const ProductView = () => {
  const { products, setProducts, loading, setLoading, offset, setOffset } =
    useProduct();

  const API_URL = `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=10`;

  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get(API_URL);
    const data = response.data;
    setProducts(data);
    setLoading(false);
  };

  const ProductRef = collection(db, "Carts");

  const handleAddToCart = async (item) => {
    const formatItem = {
      category: item.category.name,
      description: item.description,
      image: item.images[0],
      price: item.price,
      title: item.title,
      amount : 1
    };
    const response = await addDoc(ProductRef, formatItem);
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-1 flex-col h-auto min-h-screen w-full justify-center items-center overflow-y-auto">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="carousel rounded-box w-1/2 h-full min-h-100">
      {products.map((item, index) => {
        return (
          <div key={index} className="carousel-item w-1/2 mr-4">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure>
                <img src={item.images[0]} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary"
                  >
                    $ {item.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductView;
