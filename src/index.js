
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';   


ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path='/' element={<App link="/"/>} />
            <Route exact path='/earn_interest' element={<App link="/earn_interest"/>} />
            <Route exact path='/connect_wallet' element={<App link="/connect_wallet"/>} />
            <Route exact path='/earn_free_coins' element={<App link="/earn_free_coins"/>} />
            <Route exact path='/lottery' element={<App link="/lottery"/>} />
            <Route exact path='/play' element={<App link="/play"/>} />
            <Route exact path='/how_it_works' element={<App link="/how_it_works"/>} />
        </Routes>
    </Router>,    
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
