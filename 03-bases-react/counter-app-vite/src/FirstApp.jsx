import { Fragment } from "react";
import PropTypes from "prop-types";

//Esta forma, incluye un Div que esta de mas, pero en este caso es necesario para retornar el h1 y el p
export const FirstDivApp = () => {
    return (
        <div>
            <h1>First App Bryan!</h1>
            <p>Segundo tag HTML</p>
        </div>
    );
};

//Forma utilizando Fragment
export const FirstFragmentApp = () => {
    return (
        <Fragment>
            <h1>First App Bryan!</h1>
            <p>Segundo tag HTML</p>
        </Fragment>
    );
}

//Una forma sin hacer la importacion del Fragment: <> </>
export const FirstFragmentTwoApp = ( ) => {
    return (
        <>
            <h1>First App by Bryan!</h1>
            <p>Segundo tag HTML</p>
        </>
    );
}

const name = "Bryan Macario!";
const newMessage = {
    message: "Hello World",
    title: "React"
}

const getResult = (a, b) => {
    return a + b;
}

//Las props comunmente se desestructuran, no se leen como tal "props", tenerlo en cuenta
export const FirstPropsApp = ( props ) => {

    console.log(props);

    return (
        <>
            {/*<h1>First App by {name}!</h1>*/}
            <h1>{props.title}</h1>
            <h2>{getResult(5,4)}</h2>
            {/*<code>{JSON.stringify(newMessage)}</code>    Un comentario*/}
            <p>Segundo tag HTML</p>
        </>
    );
}

//Props utilizando desestructuración
export const FirstPropsDestrucApp = ( { title, subtitle } ) => {
    return (
        <>
            {/*<h1>First App by {name}!</h1>*/}
            <h1>{title}</h1>
            <p>{12 + subtitle}</p>
        </>
    );
}


export const FirstApp = ( { title, subtitle } ) => {

    /*
    if(!title) {
        throw new Error("El titulo no existe");
    }
    */

    return (
        <>
            <h1>{title}</h1>
            <p>{12 + subtitle}</p>
        </>
    );
}

//El estandar es que los Props Types y Default Props se coloquen despues de definir la función / componente

//Props Types
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

//Default Props
FirstApp.defaultProps = {
    title: "No hay título",
    subtitle: 0
}