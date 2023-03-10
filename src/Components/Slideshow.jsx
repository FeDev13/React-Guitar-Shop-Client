import React from "react";
import list from "../data";
import "../styles/slideshow.css";
import { NavLink } from "react-router-dom";

const Slideshow = () => {
  return (
    <>
      <div className="cards1">
        <h4 className=" text-center uppercase m-8">Los mas pedidos</h4>

        {list.map((values) => {
          // filtra por propiedad rating del producto y lo verifica con if
          const { id, title, price, image, rating } = values;
          if (rating >= 5) {
            return (
              <>
                <div className="card" key={id}>
                  <div className="w-full">
                    <img src={image} alt={title} />
                  </div>
                  <div className="card-body">
                    <h2 className="titleProduct">{title}</h2>
                    <span className="price">${price}</span>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Slideshow;
