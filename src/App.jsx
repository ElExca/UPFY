import React, { Component } from 'react';
import "./App.css"

import Login from "./containers/Login/Login.jsx";
import { UserProvider } from './context/UserContext.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./containers/Register/Register.jsx";
import Player from "./containers/Player/Player.jsx";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Player></Player>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                </Routes>
            </UserProvider>
        </BrowserRouter>

    );
  }
}

export default App;