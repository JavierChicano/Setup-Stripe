"use client";
import { checkoutProductoStatic } from "@/app/api/checkoutFetch";
import { useState } from "react";

//Creacion de productos (lo normal es que sea una consulta a la BBDD)
//Las ids de los productos corresponden a las generadas en Stripe
const producto1 = {
  idProducto: "price_1PicAfC4XHiMoaSuwNAGqR0i",
  nombre: "Manzanas",
  descripcion: "Manzanas de todos los colores, verdes rojas y amarillas",
  precio: 5,
  img: "manzanas.webp",
};

const producto2 = {
  idProducto: "price_1PicAfC4XHiMoaSuwNAGqR0i",
  nombre: "Cocos",
  descripcion:
    "Cocos de la mejor seleccion nacional, directamente de la palmera",
  precio: 10,
  img: "cocos.webp",
};

export default function StaticProduct() {
  const [productos] = useState([producto1, producto2]);

  const handleCheckout = (index: number) => {
    checkoutProductoStatic({ productos: [productos[index]] });
  };

  return (
    <section className="grid grid-cols-2 gap-2 w-full justify-center">
      {/* Tarjeta para mostrar los productos */}
      {productos.map((producto, index) => (
        <article
          key={index}
          className="flex flex-col flex-wrap border border-cyan-400 p-2 gap-2 cursor-pointer hover:bg-cyan-600 hover:text-white"
          onClick={() => handleCheckout(index)}
        >
          <h1 className="text-3xl">{producto.nombre}</h1>
          <h3>{producto.descripcion}</h3>
          <div className="text-3xl">{producto.precio}€</div>
        </article>
      ))}
      <button
        className="text-2xl col-span-2 p-2 bg-cyan-600 w-1/2 mx-auto text-white hover:bg-cyan-300 hover:text-black"
        onClick={() => {
          checkoutProductoStatic({ productos });
        }}
      >
        Comprar ambos
      </button>
    </section>
  );
}
