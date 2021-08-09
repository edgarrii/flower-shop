import React, {useContext} from 'react';
import {Context} from "../index";
import Row from "react-bootstrap/Row";
import FlowerItem from "./FlowerItem";
import {observer} from "mobx-react-lite";

const FlowerList = observer(() => {
    const {flower} = useContext(Context)

    return (
        <Row className='d-flex'>
            {flower.flowers.map(flower =>
                <FlowerItem key={flower.id} flower={flower}/>
            )}
        </Row>
    );
});

export default FlowerList;