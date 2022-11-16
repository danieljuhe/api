import React, { useEffect, useState } from "react";
const Home = () => {

	const [characters, setCharacters]=useState([]);

	useEffect(()=>{
		fetch('https://rickandmortyapi.com/api/character')
		.then((response)=>{
			return response.json()
		})
		.then((response)=>{
			setCharacters(response.results)
		})
	},[])

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					{
						characters.map((character,index)=>{
							return (<div class="card mb-3" key={index}>
										<div class="row g-0">
											<div class="col-md-4">
											<img src={character.image} class="img-fluid rounded-start" alt="..."/>
											</div>
											<div class="col-md-8">
											<div class="card-body">
												<h5 class="card-title">{character.name}</h5>
												<p class="card-text">Specie: {character.species}</p>
												<p class="card-text">Gender: {character.gender}</p>
												<p class="card-text">Origin: {character.origin.name}</p>
												<p class="card-text"><small class="text-muted">Status: {character.status}...</small></p>
											</div>
											</div>
										</div>
									</div>)
						})
					}
				</div>
			</div>

		</div>
	);
};

export default Home;
