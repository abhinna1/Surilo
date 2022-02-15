// import {multiply} from './Login';
import React from 'react';
import {render,fireEvent, queryByTitle, queryb} from "@testing-library/react";
import Login from './Login';


afterEach(cleanup);

it('Login', () => {
  const {queryByLabelText, getByLabelText} = render(
    <Login labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});

// it("checkRender",()=>{
//         expect(Login.render).toBe(render);
    
//         // const {queryByTitle} = render(<Login />);
//         // const btn = queryByTitle("loginButton");

// })

// test("login", ()=>{
//     expect(multiply(2,5)).toBe(10);
// })