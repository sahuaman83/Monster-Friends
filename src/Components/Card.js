import React from 'react';


const Card=({name,email,id})=>{
	return (
		<div className="bg-light-green tc dib br3 pa2 ma2 bw2 grow shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?set=set2`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		);
}

export default Card;