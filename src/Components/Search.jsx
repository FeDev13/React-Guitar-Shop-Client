import React from "react";
import list from "../data";
import { useState } from "react";

const Search = (item, handleClick) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center mt-0 mr-auto">
          <input
            className="w-1/2 rounded-md bg-slate-100 p-2"
            id="searchInput"
            type="text"
            placeholder="Buscar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className=" md:grid md:grid-cols-3 mt-0 mr-auto justify-center items-center sm: grid-cols-1">
          {list
            .filter((val) => {
              if (searchTerm === "") {
                return (
                  <>
                    <h3>No se han encontrado productos</h3>
                  </>
                );
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase()) //poner .map antes del return
              ) {
                return (
                  <div className=" bg-white m-8 pt-0 pr-8" key={val.id}>
                    <img className=" h-60" src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <button className=" bg-black text-white rounded p-1 mt-8">
                      Detalles
                    </button>
                  </div>
                );
              }
            })
            .map((val) => {
              if (searchTerm === "") {
                return <></>;
              } else {
                return (
                  <div className="bg-white m-8 pt-0 pr-8" key={val.id}>
                    <img className=" h-60" src={val.image} alt="" />
                    <h3>{val.title}</h3>
                    <button className="bg-black text-white rounded p-1 mt-8">
                      Detalles
                    </button>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Search;
