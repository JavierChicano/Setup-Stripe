import StaticProduct from "./staticProduct";

export default function StaticProductCard() {
  return (
    <div className="max-w-2xl w-full items-center flex flex-col fondoTraslucido border border-blue-200 rounded-md shadow-md p-2 px-8 gap-4">
      <h1 className="text-4xl">
        Productos <span className="italic">Estaticos</span>
      </h1>
      <h3>Se crean en Stripe</h3>
      <h3 className="self-start">
        Los productos que vendemos en la web deberan ser creados en Stripe con
        las mismas caracteristicas.
      </h3>
      <h3 className="self-start">
        Las caracteristicas estan previamente definidas y no se pueden
        modificar.
      </h3>
      <div className="flex gap-2 text-2xl w-full">
        <h1 className="w-full flex justify-center">Producto 1</h1>
        <h1 className="w-full flex justify-center">Producto 2</h1>
      </div>
      <StaticProduct />
    </div>
  );
}
