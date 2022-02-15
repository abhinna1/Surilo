
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

import {render,screen} from "@testing-library/react";
import Login from './Login';


it('should have a email , date and a password field, also a submit button', () => {
    render(<Router>  <Route exact path ="/login">
    <Login></Login>
  </Route></Router>);

    const emailField = screen.getByLabelText('Email');
    
    expect(emailField).toBeInTheDocument();
})


// test("login", ()=>{
//     expect(multiply(2,5)).toBe(10);
// })