import React,{Component} from 'react';
import SearchBox from '../Components/SearchBox';
import CardList from '../Components/CardList';
import {robots} from '../Components/robots';
import Scroll from '../Components/Scroll.js';
import Errorboundary from '../Components/Errorboundary.js';
import './App.css';

class App extends Component{
	constructor()
	{
		super()
		this.state={
			robots:robots,
			searchfield: ""
		}
	}

	// componentDidMount()
	// {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 	.then(response=>response.json())
	// 	.then(users => this.setState({robots:users}));
	// }

	onSearchChange=(event)=>{
		this.setState({ searchfield: event.target.value })
	}
	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0)
		{
			return <h1>Loading....</h1>
		}
		else{
			return(
		<div className="tc">
		<h1 className="f1">Monster Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<Errorboundary>
		<CardList robots={filteredRobots}/>
		</Errorboundary>
		</Scroll>
		</div>
		);
	}
}
}

export default App;