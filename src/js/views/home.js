import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";

import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ResourceCard from "../component/resourceCard.js";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.getSWAPI('people');
		actions.getSWAPI('species');
		actions.getSWAPI('planets')
	}, []);

	return (
		<Container className="mt-5">
			<Row>
			<Col>
		 			<h1 className="text-danger">Characters</h1>
		 			<div className="scroll-horizontal">
		 				{store.people.map((character) => {
		 					return (
		 						<ResourceCard key={character.uid} uid={character.uid} name={character.name} resource="people"/>
		 					)
		 				})}
		 			</div>
		 		</Col>
			</Row>
			<Row className="mt-4">
				<Col>
				<h1 className="text-danger">Species</h1>
				<div className="scroll-horizontal">
		 				{store.species.map((specie) => {
		 					return (
		 						<ResourceCard key={specie.uid} uid={specie.uid} name={specie.name} resource="species"/>
		 					)
		 				})}
		 			</div>
					 </Col>
			</Row>
			<Row className="mt-4">
				<Col>
				<h1 className="text-danger">Planets</h1>
				<div className="scroll-horizontal">
		 				{store.planets.map((planet) => {
		 					return (
		 						<ResourceCard key={planet.uid} uid={planet.uid} name={planet.name} resource="planets" />
		 					)
		 				})}
		 			</div>
					 </Col>
			</Row>
		</Container>
	)
}
