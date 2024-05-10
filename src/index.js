import React from "react";
import ReactDOM from "react-dom/client";

import { Greeting, TruOrFalse, ObjectUser, ViewVariable, SumInFunction,
    PropsEjemplos, PropsEjemplos2, PropsEjemplos3} from "./function";
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
    <h1>Ejmplosde Props</h1>
    <PropsEjemplos title="Hola" />
    <PropsEjemplos x = {30}/>
    <PropsEjemplos y = {true}/>
    <PropsEjemplos f = {[1, 2, 3]}/>

    <h1>Ejmplosde Props Mostrando varible</h1>
    <PropsEjemplos2 title="Hola mundo" />
    <PropsEjemplos2 title="Hola react" />
    <PropsEjemplos2 title="Hola caca" />

    <h1>Ejmplosde Props Mostrando varible</h1>
    <PropsEjemplos3 title="wena mundo" />
    <PropsEjemplos3 title="wena react" />
  </>
);

//dentro de render, puedo llamar a la funcion con el sel closing tags o solo la funcion => x()
//Como es natural de react, siempre se debe agregar dentero de una etiqueta podemos dejarlo asi <>contenido</>