import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login'

const Routs = () => {
 
    return(
        <BrowserRouter>
        <Routes>
        <Route path = '/login' element = {<Login/>}/> 

        </Routes>
        </BrowserRouter>


    )
}

export default Routs;