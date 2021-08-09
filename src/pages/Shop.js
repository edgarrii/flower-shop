import React from 'react'
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FlowerList from "../components/FlowerList";

const Shop = () => {

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <FlowerList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Shop
