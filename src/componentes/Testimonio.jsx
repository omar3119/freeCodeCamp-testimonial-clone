
import React from "react";
import "../style/Testimonio.css"

function Testimonio(props){
     return(
      <div className="contenedor-testimonio">
        <img 
        className="image-testimonio"
        src={require(`../image/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}/>
        <div className="contenedor-texto-testimonio">
          <p className="name-testimonio"><strong>{props.nombre} </strong> en {props.pais} </p>
          <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong> </p>
          <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
      </div>
     );
}

export default Testimonio;