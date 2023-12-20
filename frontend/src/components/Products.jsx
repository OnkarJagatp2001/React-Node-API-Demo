import { useState, useEffect } from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong>- {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
