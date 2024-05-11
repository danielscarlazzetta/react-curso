import "./tasks-style.css";

function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <span className={ ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tsarea realizada" : " Tarea pendiente"}
        </span>
    </div>
  );
}

//! Una forma de crear estilos puede ser esta,
//! ademas en caso de tenber algun tipo de variable lo podemos manejar aca
//! por ejemplo con un if, podriamos mostrar un estilo u otro
// function TaskCard() {
//   const cardStyle = { background: "#202020", color: "#fff", padding: "20px" };
//   return (
//     <div style={cardStyle}>
//       <h1 style={{ fontWeight: "lighter" }}>Mi primera tarea</h1>
//       <p>Tarea Realizada</p>
//     </div>
//   );
// }

//! aca se muestra un ejemplo de como condicionar
//! un estilo de css dentro de la misla linea de codigo
// function TaskCard({ready}) {
//   return (
//     <div className="card">
//       <h1>Mi primera tarea</h1>
//       <span style={ ready ? {background: 'green'} : {background: 'red'}}>{ready ? "Tsarea realizada" : " Tarea pendiente"}</span>
//     </div>
//   );
// }


export default TaskCard;
