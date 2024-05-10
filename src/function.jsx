export function Greeting() {
  const lala = "saludos";
  const numero = 30;
  return (
    <h1>
      {numero} {lala} {numero * numero}
    </h1>
  );
}

export function TruOrFalse() {
  const bool = false;
  return <h1>{bool ? "casado " : "no casado"} </h1>;
}

export function ObjectUser() {
  const user = {
    fistName: "Daniel",
    lastName: "Scarlazzetta",
  };
  //return <h1> {JSON.stringify(user)} </h1>;
  return (
    <div>
      <h1>{user.fistName}</h1>
      <h2>{user.lastName} </h2>
    </div>
  );
}

export function ViewVariable() {
  const bool2 = false;
  return <h1> {bool2.toString()} </h1>;
}

export function SumInFunction() {
  function Add(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1> {Add(12, 12)}</h1>
    </div>
  );
}

export function PropsEjemplos(props) {
  console.log(props)
  return <h1>Props</h1>
}

export function PropsEjemplos2(props) {
  console.log(props)
  return <h1>{props.title}</h1>
}

//Otra forma es extraer el titulo, asi podemos evitar usar una variable y luego .algo
export function PropsEjemplos3({title, name = 'user'}) {
  console.log(title, name)
  return <h1>{title}, {name}</h1>
}

//1;10;51 https://www.youtube.com/watch?v=rLoWMU4L_qE&t=982s