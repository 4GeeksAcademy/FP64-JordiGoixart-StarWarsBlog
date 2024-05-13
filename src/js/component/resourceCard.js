
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

function ResourceCard(props) {
    console.log("Props en ResourceCard:", props);
    const { store, actions } = useContext(Context);


    return (
        <Card className="card" style={ {width: '18rem'} } key={props.id}>
            {(props.resource === 'people')
            ? <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`} />
            : (props.resource === 'species')
             ? <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/species/${props.uid}.jpg`} />
             : (props.resource === 'planets')
               ? <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`} />
               : <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${props.resource}/${props.uid}.jpg`} />
      
        }
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <div className="d-flex justify-content-between">
                <Link className="btn btn-primary" to={"/" + props.resource + "/" + props.uid} resource={props.resource}>Read More</Link>
                <Button variant="warning" onClick={(e)=>actions.addFavorite(props.name, props.uid, props.resource)}><FontAwesomeIcon icon={faHeart} /></Button>
            </div>
        </Card.Body>
        </Card>
     )
     
}

export default ResourceCard