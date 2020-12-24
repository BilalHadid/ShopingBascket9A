import React from "react";
import "./AddtoCard.css";
import { Link } from "react-router-dom";
import { ProductItem } from "../store/ProductItem";
import { add } from "../store/basketSlice";
// import { store } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
const AddtoCard = () => {
  const products = useSelector((state: ProductItem[]) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1 className="second">
          <span>ALL Product</span>
        </h1>
      </div>
      <div>
        {products.map((product, index) => {
          return (
            <div className="Product" key={index}>
              <figure className="snip1268">
                <div className="image">
                  <img src={product.src} alt="sq-sample4" />
                  <div className="icons">
                    <Link to="#">
                      <i className="ion-star"></i>
                    </Link>
                    <Link to="#">
                      {" "}
                      <i className="ion-share"></i>
                    </Link>
                    <Link to="#">
                      {" "}
                      <i className="ion-search"></i>
                    </Link>
                  </div>
                  <Link
                    to="#"
                    className="add-to-cart"
                    onClick={() => dispatch(add(product))}
                  >
                    Add to Cart
                  </Link>
                </div>
                <figcaption>
                  <h2>{product.name}</h2>
                  <p>{product.detail}</p>
                  <div className="price">${product.price}.00 </div>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddtoCard;
