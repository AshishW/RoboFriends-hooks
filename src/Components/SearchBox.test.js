import SearchBox from "./SearchBox";
import React from "react";
import { shallow } from "enzyme";


it('renders searchbox component', ()=>{
    const SearchChange = jest.fn();
    expect(shallow(<SearchBox SearchChange = {SearchChange}/>)).toMatchSnapshot()
})

