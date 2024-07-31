import { NextRequest, NextResponse } from "next/server";
import { crearProducto } from "../../createSessions";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  //En esta variable guardaremos el id del producto para generar la session del checkout
  let idSesiones: any[] =[];

  //Comprobamos de que tipo de producto venimos (Entrará en el if, si venimos de uno dinamico, para crear sus sesiones)
  if (!body.estatico) {
    idSesiones = await crearProducto(body.producto);
  } else {
    //Cogemos el array de ids y lo recorremos para ponerle una cantidad a cada producto (en un caso real, la cantidad debera de ser dinamica)
    const ids = body.idProductos;
    ids.forEach((id: string) => {
      console.log(id);
      idSesiones.push({
        price: id,
        quantity: 1,
      });
    });
  }

  console.log(idSesiones);
  try {
    //Creacion de la sesion de pago
    const session = await stripe.checkout.sessions.create({
      customer_email: undefined,
      line_items: idSesiones,
      mode: "payment",
      success_url: `https://localhost:3000/`,
      cancel_url: `https://localhost:3000/`,
      custom_text: {
        submit: {
          message: "Te enviaremos la factura al correo electronico",
        },
        terms_of_service_acceptance: {
          message: `Acepto las [condiciones de venta](https://www.localhost:3000/Legal/CondicionesVenta)`,
        },
      },
      consent_collection: {
        terms_of_service: "required",
      },
      metadata: {
        infoAdicional: "Esto nos servira sobretodo para los webhooks",
      },
    });
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
