type Producto = {
    nombre: string;
    descripcion: string;
    precio: number;
    img: string,
  };

  type ProductoStatic = {
    idProducto: string;
    nombre: string;
    descripcion: string;
    precio: number;
    img: string,
  };

export async function checkoutProductoDinamic({ productos }: { productos: Producto[] }) {
    console.log(productos)
  try {
    //Pasamos el id del producto seleccionado y si la informacion de si es estatico o no, ya que luego lo tendremos en cuenta
    //Esto solo es necesario si estamos tratando con diferentes tipos de producto (dinamicos/estaticos)
    const datos = {
        producto: productos,
        estatico: false,
      };
    const response = await fetch(
      "../../api/fetching/checkout/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    );

    if (response.ok) {
      const session = await response.json();
      window.location.href = session.url;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function checkoutProductoStatic({ productos }: { productos: ProductoStatic[] }) {
    console.log(productos)
    const idsProductos = productos.map(producto => producto.idProducto);
    console.log(idsProductos)
    try {
    //Pasamos el id del producto seleccionado y si la informacion de si es estatico o no, ya que luego lo tendremos en cuenta
    //Esto solo es necesario si estamos tratando con diferentes tipos de producto (dinamicos/estaticos)
    const datos = {
        idProductos: idsProductos,
        estatico: true,
      };

    //Esta ruta corresponde a la estructura de carpeta que hayas hecho, asique puede variar
    const response = await fetch(
      "../../api/fetching/checkout/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      }
    );

    if (response.ok) {
      const session = await response.json();
      window.location.href = session.url;
    } else {
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}
