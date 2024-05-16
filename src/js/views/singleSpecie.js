import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container as BootstrapContainer, Row, Col, Image } from "react-bootstrap";
import { Context } from "../store/appContext";


const SingleSpecie = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const specie = store.specie

    useEffect(() => {
        actions.getSWAPI(`species/${params.theid}`);
    }, [actions, params.theid]);

    const renderSpecieDetails = () => {
        return Object.keys(specie).map((key, index) => {
            if (
                key !== "name" &&
                typeof specie[key] !== "object" &&
                specie[key] !== "" &&
                !specie[key].startsWith("http")
            ) {
                return (
                    <Col key={key}>
                        <div className="d-inline-block">
                            <strong>
                                ${key.replace(/_/g, " ").replace(/\b\w/g, match => match.toUpperCase())}:
                            </strong>
                        </div>
                        <div className="d-block">{specie[key]}</div>
                    </Col>
                );
            }
            return null;
        });
    }

    return (
        <div className="container mt-5">
            <BootstrapContainer>
                <Row>
                    <Col>
                        <Image
                            src={params.theid ? `https://starwars-visualguide.com/assets/img/species/${params.theid}.jpg` : ""}
                        />
                    </Col>
                    <Col>
                        <h1>{specie.name}</h1>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis
                            varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula
                            ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis
                            elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>
                    </Col>
                </Row>
                <Row className="border-top mt-2 pt-3">{renderSpecieDetails()}</Row>
            </BootstrapContainer>

            <Link to="/">
                <span className="btn btn-primary btn-lg mt-5" href="/" role="button">
                    Atrás
                </span>
            </Link>
        </div>
    );

};


export default SingleSpecie;