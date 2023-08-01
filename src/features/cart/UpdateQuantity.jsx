import React from "react";
import Button from "../../ui/Button";
import { incItemToCart, decItemToCart } from "./cartSlice";
import { useDispatch } from "react-redux";

const UpdateQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItemToCart(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incItemToCart(pizzaId))}>
        +
      </Button>
    </div>
  );
};

export default UpdateQuantity;
