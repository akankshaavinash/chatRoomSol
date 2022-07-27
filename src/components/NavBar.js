import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

export function NavBar(props) {
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="#home">Chat App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    <Button
                        style={{ display: props.showButton }}
                        variant="success"
                        onClick={async () => {
                        props.login();
                        }}
                    >
                        Connect to Metamask
                    </Button>
                    <div
                        style={{ display: props.showButton === "none" ? "block" : "none" }}
                    >
                        Signed in as:
                        <a href="#">{props.username}</a>
                    </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
}

// export default NavBar;