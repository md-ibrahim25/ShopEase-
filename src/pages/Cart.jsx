import { ProductCard } from "@/components";
import store from "@/store/store";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { useSelector } from "react-redux";
function Cart() {
  const [cartItemsData, setCartItemsData] = useState([]);
  const cartItems = useSelector((state) => state.cart.itemsId);

  //Fetch data of all cart items
  const fetchCartItemsData = async (id) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`).then(
      (res) => res.json(),
    );
    return data;
  };

  useEffect(() => {
    const allCartItemsData = async () => {
      const data = await Promise.all(
        cartItems.map((item) => fetchCartItemsData(item)),
      );
      setCartItemsData(data);
    };
    allCartItemsData();
  }, [cartItems]);

  if (cartItems.length <= 0) {
    return (
      <div className="rounded border border-red-300 bg-red-100 p-4 text-center text-red-800">
        <h2 className="text-lg font-semibold">Your cart is empty</h2>
        <p>Please add some items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cartItemsData.map((data) => (
        <ProductCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Cart;
