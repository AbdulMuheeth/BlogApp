import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import {Provider} from "react-redux";
import store from "./App/store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

document.body.style.backgroundColor = "black";

ReactDom.render(<Provider store={store}>
    <App/>
</Provider>,document.getElementById('root'))
