import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import Smartwatch from "./Smartwatch";
import Amazonecho from "./Amazonecho";
import Apple from "./Apple";
import Samsung from "./Samsung";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Smartwatch />
      </div>
      <div class="product_row d-flex">
        <Amazonecho />
        <Apple />
      </div>
      <div class="product_row d-flex">
        <Samsung />
      </div>
    </div>
  );
}

export default Product;
