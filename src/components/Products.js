import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";

const Products = () => {
  const { items: bakedProducts, status } = useSelector((state) => state.bakedProducts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (bakedProduct) => {
    dispatch(addToCart(bakedProduct));
    navigate.push("/cart");
  };

  return (
    <>
    <div className="space">
      </div>

    <section className="products" id="products">
          <h1 className="heading">Our
            <span>
              Menu
            </span>  
          </h1>
    

      <div className="box-container">
        {status === "success" ? (
          <>
            <h2>New Arrivals</h2>
            <div className="box">
              {data &&
                data?.map((bakedProduct) => (
                  <div key={bakedProduct.id} className="box">
                    <div className="img">
                    <img src={bakedProduct.image} alt={bakedProduct.name} />
                    </div>

                    <div className="content">
                      <h3>{ bakedProduct.name } </h3>
                      <div className="price">
                      ${bakedProduct.price}
                      </div>

                    </div>
                    <button onClick={() => handleAddToCart(bakedProduct)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occured...</p>
        )}
      </div>
    </section>
    </>  
  );
};

export default Products;
        