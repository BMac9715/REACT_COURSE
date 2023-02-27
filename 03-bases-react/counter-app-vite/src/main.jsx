import React from 'react';
import ReactDOM from "react-dom/client";
import { App, HelloApp } from "./HelloApp";
import { FirstApp } from "./FirstApp";
import { CounterApp } from "./CounterApp";

import "./styles.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<HelloApp />*/}
        {/*<FirstApp />*/}
        <CounterApp value={20}/>
    </React.StrictMode>
);