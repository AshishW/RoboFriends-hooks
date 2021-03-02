import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

import {requestRobots, setSearchField} from '../actions';

const mapStateToProps = (state) =>{
   return {
       searchField: state.searchRobots.searchField,
       robots: state.requestRobots.robots,
       initialState: state.requestRobots.initialState,
       error: state.requestRobots.error
   }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onSearchChange: (event)=> dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    
    componentDidMount() {
      this.props.onRequestRobots();
    }
    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
    return isPending?
        <h1>LOADING...</h1>
        :
        (
            <div className='tc'>
                <h1 style={{fontSize: '3rem'}} className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots = { filteredRobots }/>
                </Scroll>
            </div>
        );
     }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);