import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function NewUserModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const submitUser = () => {
        if (name !== '' && surname !== '') {
            props.addUser(name, surname);
            setName('');
            setSurname('');
            setShow(false);
        }
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="name" value={name}>Name</InputGroup.Text>
                            <Form.Control
                                placeholder="Name"
                                aria-label="Name"
                                onChange={e => setName(e.target.value)}
                                aria-describedby="name" />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="surname" value={surname}>Surname</InputGroup.Text>
                            <Form.Control
                                placeholder="Surname"
                                aria-label="Surname"
                                onChange={e => setSurname(e.target.value)}
                                aria-describedby="surname" />
                        </InputGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NewUserModal;