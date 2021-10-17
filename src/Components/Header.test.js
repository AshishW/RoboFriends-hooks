import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";

it('renders Header component', ()=>{
    expect(shallow(<Header />)).toMatchSnapshot();
})

