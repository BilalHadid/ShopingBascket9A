import React from "react";
// import avator from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { Theme, withStyles, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
// import {} from '../store/basketSlice'
import { ProductItem } from "../store/ProductItem";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  })
)(Badge);
const Header = () => {
  const products = useSelector((state: ProductItem[]) => state);
  let totalPro =
    products.filter((pro) => pro.added).length <= 0
      ? 0
      : products.filter((product) => product.added).length;
  return (
    <div className="Header">
      <div className="Logo">
        <img
          src="http://capricathemes.com/wordpress/WCM02/WCM020035/wp-content/themes/footflops/images/codezeel/logo.png"
          alt=""
        />
      </div>
      <div className="Navbar" style={{ marginBottom: "-35px" }}>
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>
              {"  "}Home
            </Link>
          </li>
          <li>
            <Link to="/card">
              <IconButton aria-label="cart" style={{ top: "-15px" }}>
                <StyledBadge badgeContent={totalPro} color="secondary">
                  <ShoppingCartIcon style={{ color: "white" }} />
                </StyledBadge>
              </IconButton>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
