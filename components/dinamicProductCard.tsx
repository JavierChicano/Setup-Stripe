"use client";

import { useState, useEffect } from "react";
import DinamicProduct from "./dinamicProduct";

export default function DinamicProductCard() {
  const [formData, setFormData] = useState({
    nombre1: "Manzanas",
    nombre2: "Cocos",
    descripcion1: "Manzanas de todos los colores, verdes rojas y amarillas",
    descripcion2: "Cocos de la mejor seleccion nacional, directamente de la palmera",
    precio1: 5,
    precio2: 10
  });

  const handleFormChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name.includes("precio") ? Math.max(1, Number(value)) : value,
    }));
  };

  useEffect(() => {
    const formElement = document.querySelector("form");
    if (formElement) {
      const formData = new FormData(formElement);
      const data = {
        nombre1: formData.get("nombre1") as string,
        nombre2: formData.get("nombre2") as string,
        descripcion1: formData.get("descripcion1") as string,
        descripcion2: formData.get("descripcion2") as string,
        precio1: parseFloat(formData.get("precio1") as string),
        precio2: parseFloat(formData.get("precio2") as string),
      };
      setFormData(data);
    }
  }, []);

  return (
    <div className="max-w-2xl w-full items-center flex flex-col fondoTraslucido border border-blue-200 rounded-md shadow-md p-2 px-8 gap-4">
      <h1 className="text-4xl">
        Productos <span className="italic">Dinamicos</span>
      </h1>
      <h3>Se crean en funcion de lo introducido por el usuario</h3>
      <h3>Para casos en los que hayan muchos productos y que cada uno tenga varias formas de personalizacion.</h3>
      <aside className="self-start w-full flex flex-col gap-4">
        <h3>Las caracteristicas varian en cada caso de compra.</h3>
        <div className="flex gap-2 text-2xl">
          <h1 className="w-full flex justify-center">Producto 1</h1>
          <h1 className="w-full flex justify-center">Producto 2</h1>
        </div>
        <form className="grid grid-cols-2 gap-2" onChange={handleFormChange}>
          <input
            type="text"
            placeholder="Nombre primer producto"
            className="h-8 w-full pl-3"
            required
            name="nombre1"
            defaultValue={formData.nombre1}
          />
          <input
            type="text"
            placeholder="Nombre segundo producto"
            className="h-8 w-full pl-3"
            required
            name="nombre2"
            defaultValue={formData.nombre2}
          />
          <textarea
            placeholder="Descripcion primer producto"
            className="min-h-8 w-full pl-3 flex"
            required
            name="descripcion1"
            defaultValue={formData.descripcion1}
          />
          <textarea
            placeholder="Descripcion segundo producto"
            className="min-h-8 w-full pl-3"
            required
            name="descripcion2"
            defaultValue={formData.descripcion2}
          />
          <input
            type="number"
            placeholder="Precio primer producto"
            className="h-8 w-full pl-3"
            required
            name="precio1"
            min="1"
            defaultValue={formData.precio1}
          />
          <input
            type="number"
            placeholder="Precio segundo producto"
            className="h-8 w-full pl-3"
            required
            name="precio2"
            min="1"
            defaultValue={formData.precio2}
          />
        </form>
      </aside>
      <DinamicProduct datos={formData} />
    </div>
  );
}
