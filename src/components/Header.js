import React, {useContext} from 'react';
import {Form, Button, FormControl, Nav, Navbar, Container} from "react-bootstrap";
import {Context} from "../index";
import {VISITOR_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink
                    style={{
                        color: 'black',
                        fontSize: '1.5rem',
                        textDecoration: 'none',
                    }}
                    to={VISITOR_ROUTE}>Flower Shop</NavLink>
                <Form className="d-flex m-auto">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-dark">Search</Button>
                </Form>
                {user.isAuth ?
                    <Nav>
                        <Button variant="outline-dark">Edit</Button>
                        <Button style={{marginLeft: 20}} onClick={() => user.setIsAuth(false)} variant="outline-dark">Log Out</Button>
                    </Nav>
                    :
                    <Button style={{marginLeft: 20}} onClick={() => user.setIsAuth(true)}
                            variant="outline-dark">Authorize</Button>
                }
            </Container>
        </Navbar>
    );
});

export default Header;