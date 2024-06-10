import React from "react";
import '../stylesheets/Pantalla.css'
const Pantalla = ({props}) => (
  <div className="input">
    {props.children}
  </div>
);
export default Pantalla;