import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expects to render the card component', ()=>{
    const mockRobots = [
        {
            id: 1,
            name: 'test',
            email: 'test@gmail.com'
        }
    ];
    expect(shallow(<CardList robots = { mockRobots }/>)).toMatchSnapshot();
})

//the CardList Component filters robots. So it needs robots as props, 
//that's why we'll have to create a mockRobots array 
//that contains the information of the robot inside objects.
 
