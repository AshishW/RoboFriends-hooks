// import { shallow, mount, render } from 'enzyme';
import {shallow} from 'enzyme';
import React from 'react';
import Card from './Card';
it('expects to render the card component', ()=>{
    expect(shallow(<Card/>).length).toBe(1);
    expect(shallow(<Card/>)).toMatchSnapshot();
})


//shallow: IT SHALLOW RENDERS THE CARD COMPONENT.
//IF THERE ARE OTHER COMPONENTS INSIDE THE CARD COMPONENT THEN IT WILL NOT TEST THAT OTHER COMPONENT


//mount: IT FULLY RENDERS THE COMPONENT AND NEEDS DOM API (used with js-DOM).
// use it if you have direct dom manupulations like document.querySelector OR if you want to test the lifecycle methods.

//render: IT RENDERS THE COMPONENT WITH ITS CHILDREN COMPONENTS. THINK IT AS SOMETHING IN BETWEEN THE SHALLOW AND MOUNT.
// unlike mount which requires Full DOM API, this renders to static html