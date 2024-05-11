import React from "react";
import ReactDOM from "react-dom/client";

import {
  Greeting,
  TruOrFalse,
  ObjectUser,
  ViewVariable,
  SumInFunction,
  PropsEjemplos,
  PropsEjemplos2,
  PropsEjemplos3,
} from "./function";
import Producto, { UserCard } from "./Product";

import Button from './Button'

import TaskCard from './Task'
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//sel closing tags, es basicamente crear una funcion y cerrarla con la misma etiqueta
//como por ejemplo <lala/> esto es igual a <lala><lala/>

root.render(
  <>
    {/* <TruOrFalse />
    <Greeting />
    <ObjectUser />
    <ViewVariable />
    <SumInFunction />
    <Producto />
    <UserCard />
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
    <PropsEjemplos3 title="wena mundo" name= 'caca'/>
    <PropsEjemplos3 title="wena react" /> */}

    {/* <UserCard
      name="Daniel"
      amount={3000}
      married="true"
      point={[99, 22, 33.2]}
      address={{
        street: "123 main street",
        city: "New York",
      }}
      greet={ function () {alert('wena')}}
    />
    <UserCard
      name="Leinad"
      amount={4000}
      married="true"
      point={[99, 22, 33.2]}
      address={{
        street: "312 main street",
        city: "New York",
      }}
      greet={ function () {alert('wena')}}
    />

    <Button text='Touch me' />
    <Button text='Pay me' />
    <Button text='' name='joe' /> */}
    {/* <Button text={300} /> */}
    {/* <Button text={{text: 'hola'}} /> */}


    <TaskCard ready={true}/>
  </>
);

//dentro de render, puedo llamar a la funcion con el sel closing tags o solo la funcion => x()
//Como es natural de react, siempre se debe agregar dentero de una etiqueta podemos dejarlo asi <>contenido</>
