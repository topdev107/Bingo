
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

var BASE_URL_LOCAL = "http://localhost:5000/api/v1";
var BASE_URL_SERVER = "http://134.209.22.166:5000/api/v1";
window.BASE_URL = BASE_URL_SERVER;


ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path='/' element={<App link="/"/>} />
            <Route  path='/earn_interest' element={<App link="/earn_interest"/>} />
            <Route  path='/connect_wallet' element={<App link="/connect_wallet"/>} />
            <Route  path='/earn_free_coins' element={<App link="/earn_free_coins"/>} />
            <Route  path='/lottery' element={<App link="/lottery"/>} />
            <Route  path='/play' element={<App link="/play"/>} />
            <Route  path='/how_it_works' element={<App link="/how_it_works"/>} />
        </Routes>
    </Router>,    
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
