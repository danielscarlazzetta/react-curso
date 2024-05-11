import PropTypes from "prop-types";

function Button({ text, name }) {
  return <button>{text} - {name}</button>;
}

//! esto es una forma de usar el valor por defecto
// function Button({ text, name = 'User' }) {
//   return <button>{text} - {name}</button>;
// }

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//Este apartado nos permitira dejar un valor por defecto, se puede utilizar como antes dentro del paremtro de la funcion
Button.defaultProps = {
    name: 'Some User'
}

export default Button;
