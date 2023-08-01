import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItemToCart } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDeleteCart = () => {
    dispatch(deleteItemToCart(pizzaId));
  };
  return (
    <Button type="small" onClick={handleDeleteCart}>
      Remove
    </Button>
  );
};

export default DeleteItem;
