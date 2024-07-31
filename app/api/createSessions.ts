const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//Ruta de la imagen, cambiara si esta hosteada en un servidor
const baseUrl =`https://localhost:3000/`

//Funcion para crear las sessions del producto
export async function crearProducto(productos: any) {
  // Array para guardar los datos
  const resultados = [];
  console.log(productos);
  //Mapeamos el parametro por si tenemos mas de 1 producto
  for (const producto of productos) {
  console.log(producto);
  try {
      const crearProducto = await stripe.products.create({
        name: `${producto.nombre}`,
        description: `${producto.descripcion}`,
        images: [`${baseUrl}${producto.img}`],
      });
      //Creacion del precio el producto (el precio se multiplica por 100 porq esta en centimos)
      const crearPrecioProducto = await stripe.prices.create({
        currency: "eur",
        unit_amount: `${producto.precio * 100}`,
        product: `${crearProducto.id}`,
      });

      // Guardar los datos en el array
      resultados.push({
        price: crearPrecioProducto.id,
        quantity: 1
      });
    } catch (error) {
      console.error("Error al dividir los productos", error);
    }
  }
  console.log(resultados);
  return resultados;
}
