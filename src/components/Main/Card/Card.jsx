import React from "react";

// const Card = () => {
//   return <div>Card</div>;
// };

const Card = ({data}) => {
  const {nombre, email, urlImagen, edad} = data;
  return <article >
    <p>{nombre}</p>
    <p>{email}</p>
    <img src={urlImagen} alt="image"/>
    <p>{edad}</p>
  </article>;
};

export default Card;
