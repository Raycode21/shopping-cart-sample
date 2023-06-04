import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";

const Products = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (bakedProduct) => {
    dispatch(addToCart(bakedProduct));
    navigate("/cart");
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

        
          <>

            <h2>Current Flavors & designs</h2>
            <div> 
              {data &&
                data?.map((bakedProduct) => (
                  <div key={bakedProduct.id} className="box">
                    <div className="img">
                    <img src={bakedProduct.image} alt={bakedProduct.name} />
                    </div>

                    <div className="content">
                      <h3>{ bakedProduct.name } </h3>
                      <div className="price">
                      Ksh.{bakedProduct.price}
                      </div>

                    </div>
                    <button className="btn" onClick={() => handleAddToCart(bakedProduct)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </>
        
      </div>
    </section>
    </>  
  );
};

export default Products;
        