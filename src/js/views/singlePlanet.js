import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container as BootstrapContainer, Row, Col, Image } from "react-bootstrap";
import { Context } from "../store/appContext";

const singlePlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const planet = store.planet;

    useEffect(() => {
        actions.getSWAPI(`planets/${params.theid}`);
    }, [actions, params.theid]);

    const renderPlanetDetails = () => {
        return Object.keys(planet).map((key, index) => {
            if (
                key !== "name" &&
                typeof planet[key] !== "object" &&
                planet[key] !== "" &&
                !planet[key].startsWith("http")
            ) {
                return (
                    <Col key={key}>
                        <div className="d-inline-block">
                            <strong>
                                ${key.replace(/_/g, " ").replace(/\b\w/g, match =>
                                    match.toUpperCase()
                                )}:
                            </strong>
                        </div>
                        <div className="d-block">{planet[key]}</div>
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
                            src={params.theid ? `https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg` : ""}
                        />
                    </Col>
                    <Col>
                        <h1>{planet.name}</h1>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis
                            varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula
                            ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis
                            elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>

                    </Col>
                </Row>
                <Row className="border-top mt-2 pt-3">{renderPlanetDetails()}</Row>
            </BootstrapContainer>
            <Link to="/">
                <span className="btn btn-primary btn-lg mt-5" href="/" role="button">
                    Atrás
                </span>
            </Link>
        </div>
    );
};

export default singlePlanet;