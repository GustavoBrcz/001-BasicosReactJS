import React from "react";

function Header ({titulo}) {


    // const nombre = "Gustavo";

    // var mensaje;

    // if (nombre === "Gustavo") {
    //     mensaje = "Eres el mejor del mundo";
    // }else {
    //     mensaje = "No eres Gustavo";
    // }

    // const edad = 25;


    // var notificacion = (edad >= 18) ? "Eres mayor de edad" : "No estás apto para estar aquí";

    return (
        <h1 id = "titulo" className="encabezado">{titulo}</h1>
    );
};

export default Header;