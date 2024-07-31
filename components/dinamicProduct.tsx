import { useEffect, useState } from "react";
import { checkoutProductoDinamic } from "@/app/api/checkoutFetch";

type DinamicProductParams = {
  nombre1: string;
  nombre2: string;
  descripcion1: string;
  descripcion2: string;
  precio1: number;
  precio2: number;
};

type Producto = {
  nombre: string;
  descripcion: string;
  precio: number;
  img: string;
};

export default function DinamicProduct({
  datos,
}: {
  datos: DinamicProductParams;
}) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    setProductos([
      {
        nombre: datos.nombre1,
        descripcion: datos.descripcion1,
        precio: datos.precio1,
        img: "manzanas.webp",
      },
      {
        nombre: datos.nombre2,
        descripcion: datos.descripcion2,
        precio: datos.precio2,
        img: "cocos.webp",
      },
    ]);
  }, [datos]);

  const handleCheckout = (index: number) => {
    checkoutProductoDinamic({ productos: [productos[index]] });
  };

  return (
    <section className="grid grid-cols-2 gap-2 w-full justify-center">
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
          checkoutProductoDinamic({ productos });
        }}
      >
        Comprar ambos
      </button>
    </section>
  );
}
