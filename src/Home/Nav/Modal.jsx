import React, { useState } from 'react'
import { Button, Form, InputGroup, Modal } from 'react-bootstrap'
import Profile from './image/Profile.svg'


export default function ModalNav() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="" onClick={handleShow}>
                <img src={Profile} alt="" />
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Enter to your accaunt</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>Email and Password</InputGroup.Text>
                        <Form.Control aria-label="First name" />
                        <Form.Control aria-label="Password" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-primary" onClick={handleClose}>Check Me</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
