import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/ActionCreators";
import Product from "./Product";

const Home = () => {
  const loading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.data);
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return <h1 className="loading">loading...</h1>;
  if (error) return <h1 className="error">{error}</h1>;
  return (
    <div className="products">
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Home;
