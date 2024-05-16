import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container as BootstrapContainer, Row, Col, Image } from "react-bootstrap";
import { Context } from "../store/appContext";

const singleVehicle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const vehicle = store.vehicle;

    useEffect(() => {
        actions.getSWAPI(`vehicles/${params.theid}`);
    }, [actions, params.theid]);

    const renderVehicleDetails = () => {
        return Object.keys(vehicle).map((key, index) => {
            if (
                key !== "name" &&
                typeof vehicle[key] !== "object" &&
                vehicle[key] !== "" &&
                !vehicle[key].startsWith("http")
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
                        <div className="d-block">{vehicle[key]}</div>
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
                            src={params.theid ? `https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg` : ""}
                        />
                    </Col>
                    <Col>
                        <h1>{vehicle.name}</h1>
                        <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis
                            varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula
                            ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis
                            elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
                        </p>

                    </Col>
                </Row>
                <Row className="border-top mt-2 pt-3">{renderVehicleDetails()}</Row>
            </BootstrapContainer>
            <Link to="/">
                <span className="btn btn-primary btn-lg mt-5" href="/" role="button">
                    Atrás
                </span>
            </Link>
        </div>
    );
};

export default singleVehicle;