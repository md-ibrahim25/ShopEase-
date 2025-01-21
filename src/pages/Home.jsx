import { ProductCard } from "@/components";
import React, { useEffect,useState } from "react";

function Home() {
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  //Fetch data FRom api
  const fetchData = async () => {
    setLoading(true); // Set loading to true when fetching starts
    setError(null); // Reset error state before fetching
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDataArray(data.products); // Assuming the data structure has a 'products' array
    } catch (error) {
      setError(error.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false when fetching is done
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {dataArray.map((data) => (
        <ProductCard key={data.id} data={data} />
      ))}
    </div>
  );
}

export default Home;
