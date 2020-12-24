import React, { useState } from "react";
import Header from "./Header";
import "./CardPayment.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove, clear, inc } from "../store/basketSlice";
import EmptyBasket from "./EmptyBasket";
import { ProductItem } from "../store/ProductItem";

const CardPayment = () => {
  const products = useSelector((state: ProductItem[]) => state);
  let dispatch = useDispatch();
  return (
    <div className="CardPayment">
      <Header />
      <div>
        {products.filter((product) => product.added).length === 0 ? (
          <EmptyBasket />
        ) : (
          <div className="container">
            <table id="cart" className="table table-hover table-condensed">
              <thead>
                <tr>
                  <th style={{ width: "100%" }}>Product</th>
                  <th style={{ width: "10%" }}>Price</th>
                  <th style={{ width: "8%" }}>Quantity</th>
                  <th style={{ width: "22%" }} className="text-center">
                    Subtotal
                  </th>
                  <th style={{ width: "10%" }}></th>
                </tr>
              </thead>
              {products
                .filter((product) => product.added)
                .map((pro) => (
                  <tbody>
                    <tr>
                      <td data-th="Product">
                        <div className="row">
                          <div className="col-sm-2 hidden-xs">
                            <img
                              src={pro.src}
                              alt="..."
                              className="img-responsive"
                              style={{ height: "100px", width: "100px" }}
                            />
                          </div>
                          <div className="col-sm-10">
                            <h4 className="nomargin">{pro.name}</h4>
                            <p>{pro.detail}</p>
                          </div>
                        </div>
                      </td>
                      <td data-th="Price">${pro.price}</td>
                      <td data-th="Quantity" style={{ display: "flex" }}>
                        <button
                          className="btn btn-info"
                          onClick={() => dispatch(inc(pro))}
                        >
                          +
                        </button>
                        <h5 style={{ padding: "5px" }}>{pro.quantity}</h5>
                        {"  "}
                        <button
                          className="btn btn-info"
                          onClick={() => dispatch(remove(pro))}
                        >
                          -
                        </button>
                      </td>
                      <td data-th="Subtotal" className="text-center">
                        ${pro.price}
                      </td>
                      <td className="actions" data-th="">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            dispatch(clear(pro));
                          }}
                          // style={{ backgroundColor: "#ec0035" }}
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                        {/* <button className="btn btn-danger btn-sm">
                    <i className="fa fa-trash-o"></i>
                  </button> */}
                      </td>
                    </tr>
                  </tbody>
                ))}

              <tfoot>
                {/* <tr className="visible-xs">
                <td className="text-center">
                  <strong>Total 1.99</strong>
                </td>
              </tr> */}
                <tr>
                  <td>
                    <Link to="/" className="btn btn-warning">
                      <i className="fa fa-angle-left"></i> Continue Shopping
                    </Link>
                  </td>
                  {/* <td colspan="2" class="hidden-xs"></td> */}
                  <td className="hidden-xs text-center">
                    <strong>
                      Total $
                      {products.reduce(
                        (total, pri) => total + pri.price * pri.quantity,
                        0
                      )}
                    </strong>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPayment;
