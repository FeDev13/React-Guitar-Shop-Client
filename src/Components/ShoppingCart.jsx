import React from "react";
import { useContext } from "react";
import { CartContext } from "../Contexts/Context";
import Navbar from "./NavBar";
import shoppingcart from "../styles/shoppingcart.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ShoppingCart = () => {
  const Globalstate = useContext(CartContext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, producto) => {
    return total + producto.precio * producto.quantity;
  }, 0);
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 p-32 w-1/2">
        {state.map((producto, index) => {
          return (
            <div className="flex justify-between items-center" key={index}>
              <img className=" w-32 h-32" src={producto.imagen} alt="" />
              <p>{producto.nombre}</p>
              <p> $ {producto.quantity * producto.precio}</p>
              <div className="flex flex-row items-center m-8">
                <button
                  onClick={() => dispatch({ type: "SUMA", payload: producto })}
                >
                  <AddIcon className=" m-8"></AddIcon>
                </button>
                <p>{producto.quantity}</p>
                <button
                  onClick={() => {
                    if (producto.quantity > 1) {
                      dispatch({ type: "RESTA", payload: producto });
                    } else {
                      dispatch({ type: "QUITAR", payload: producto });
                    }
                  }}
                >
                  <RemoveIcon className=" m-8"></RemoveIcon>
                </button>
              </div>
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch({ type: "QUITAR", payload: producto })}
              >
                Quitar
              </Button>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className=" text-right border-t-2">
            <h2>Total $ {total}</h2>
            <NavLink to="/compra">
              <button className=" bg-lime-800 p-1 rounded-md h-full text-white">
                Finalizar compra
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
