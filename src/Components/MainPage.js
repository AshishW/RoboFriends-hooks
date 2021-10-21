import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

import Header from '../Components/Header';


class MainPage extends Component {
    componentDidMount() {
      this.props.onRequestRobots();
    }

    filteredRobots = () =>{
        return this.props.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render(){
        const { onSearchChange, isPending } = this.props;
    return isPending?
        <h1>LOADING...</h1>
        :
        (
            <div className='tc'>
                <Header/>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots = { this.filteredRobots() }/>
                </Scroll>
            </div>
        );
     }
    
}

export default MainPage;