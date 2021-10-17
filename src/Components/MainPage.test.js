import MainPage from "./MainPage";
import React from "react";
import {shallow, ShallowWrapper} from 'enzyme';

let wrapper;
beforeEach(()=>{
  const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps}/>);
}) //before each test, this function runs

it('renders the MainPage without crashing', ()=>{
    expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', ()=>{
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'test',
      email: 'test@gmail.com'
    }],
    searchField: 'test',
    isPending: false
  }
  
  const wrapper2 = shallow(<MainPage {...mockProps2}/>);
  expect(wrapper2.instance().filteredRobots()).toEqual([{
    id: 1,
    name: 'test',
    email: 'test@gmail.com'
  }])
})

it('filters robots correctly 2', ()=>{
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'test',
      email: 'test@gmail.com'
    }],
    searchField: 'a',
    isPending: false
  }
  
  const wrapper3 = shallow(<MainPage {...mockProps3}/>);
  expect(wrapper3.instance().filteredRobots()).toEqual([])
})

it('checks if the loading text appears when the robots are being requested', ()=>{
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: true
  }
  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.text()).toEqual("LOADING...")
})