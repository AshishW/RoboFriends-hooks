import CounterButton from "./CounterButton";
import React from "react";
import {shallow} from 'enzyme';


it('renders CounterButton', ()=>{
    const mockColor = 'red';
    expect(shallow(<CounterButton color = {mockColor}/>)).toMatchSnapshot()
})

it('checks if click works', ()=>{
        const mockColor = 'red';
        const wrapper = shallow(<CounterButton color = { mockColor }/>);
        wrapper.find('#btn').simulate('click'); 
        expect(wrapper.state().count).toEqual(2);
        wrapper.find('#btn').simulate('click'); 
        expect(wrapper.state().count).toEqual(3);
})

it('checks the shouldComponentUpdate',()=>{
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color = { mockColor }/>);
    wrapper.find('#btn').simulate('click'); 
    const mockNextState = {
        count:2
    }
    const mockNextProps = {} //empty object
    const shouldComponentUpdate = wrapper.instance().shouldComponentUpdate(mockNextProps, mockNextState);
    expect(shouldComponentUpdate).toBe(false);
})
