import React from "react";
import ReactDOM from "react-dom/client";

import { Greeting, TruOrFalse, ObjectUser, ViewVariable, SumInFunction} from "./function";
import Producto, {Las} from "./Product";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//sel closing tags, es basicamente crear una funcion y cerrarla con la misma etiqueta
//como por ejemplo <lala/> esto es igual a <lala><lala/>

root.render(
  <>
    <TruOrFalse />
    <Greeting />
    <ObjectUser />
    <ViewVariable />
    <SumInFunction />
    <Producto />
    <Las />
  </>
);

//dentro de render, puedo llamar a la funcion con el sel closing tags o solo la funcion => x()
//Como es natural de react, siempre se debe agregar dentero de una etiqueta podemos dejarlo asi <>contenido</>