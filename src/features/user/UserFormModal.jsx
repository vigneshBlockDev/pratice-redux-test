import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addUser } from './userSlice';
import _ from 'lodash'

function UserFormModal({ isOpen }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [userDetails, setUserDetails] = useState({
        "name": "",
        "city": "",
        "number": ""
    });
    useEffect(() => {
        setShow(isOpen)
    }, [isOpen]);
    const handleClose = () => {
        setShow(false);
    }
    const handleInput = (event, key) => {
        let value = event.target.value;
        setUserDetails({ ...userDetails, [key]: value });
    }
    const handleCancel = () => {
        setUserDetails({
            "name": "",
            "city": "",
            "number": ""
        });
        setShow(false);
    }
    const handleSave = () => {
        if (userDetails.city.trim() !== "" && userDetails.name.trim() !== "" && userDetails.number.trim() !== "") {
            dispatch(addUser(userDetails))
        }
        handleCancel();
    }
    useEffect(() => {
        console.log(userDetails);
    }, [userDetails]);
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>User Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(event) => handleInput(event, "name")} name="name" placeholder="JohnDoe" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="number" onChange={(event) => handleInput(event, "number")} name="number" placeholder="9940426878" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" onChange={(event) => handleInput(event, "city")} name="city" placeholder="Chennai" />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
                <Button variant="primary" onClick={handleSave}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserFormModal;