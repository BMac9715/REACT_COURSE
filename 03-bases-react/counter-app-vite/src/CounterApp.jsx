import { Fragment, useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = (event) => {
        //console.log(event);
        setCounter(counter + 1);
        //setCounter((c)=> c + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const resetCounter = () => {
        setCounter(value);
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }> +1</button>
            <button onClick={ handleSubstract }> -1</button>
            <button onClick={ resetCounter }> Reset</button>
        </Fragment>
    );
}

//Props Types
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

//Default Props
CounterApp.defaultProps = {
    value: 0
}