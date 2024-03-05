import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await axios.get(url);
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="products-container">
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          img={product.image}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
