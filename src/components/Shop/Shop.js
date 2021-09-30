import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="search-field">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="type here to search"
          aria-label="type here to search"
          aria-describedby="search-btn"
        />
        <button class="btn btn-dark" type="button" id="search-btn">
          Search
        </button>
        <span style={{ color: "orangered", paddingTop: "5px" }}>
          <FontAwesomeIcon
            className="font-icon"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
          0
        </span>
      </div>
    </div>
  );
};

export default Shop;
