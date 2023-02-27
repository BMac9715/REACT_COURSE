const activo = true;


let mensaje = "";

//if(activo) { mensaje = "Activo"; } else { mensaje = "Inactivo"; }

//Con operador ternario
mensaje = activo ? "Activo" : "Inactivo";

//Cuando solo quiero cuando se cumple la condición
mensaje = activo && "Activo forma corta";

console.log(mensaje);