import React from 'react';
import Card from './Card.js';

const CardList=({robots})=>{
	// if(true)                            // for intentionally creating error to check use of Error boundary
	// 	throw error;
	return(
		<div>
		{
			robots.map((user,i)=>{
		return (
			<Card 
			key={i} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
			/>
			);
		})
		}
		</div>
		);
}

export default CardList;