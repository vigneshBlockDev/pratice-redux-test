import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import UserFormModal from './UserFormModal';

const UserGridView = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddUser = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <Container >
            <UserFormModal isOpen={isModalOpen} />
            <Row className="mt-3 justify-content-md-center">
                <Col>
                    <Button variant="outline-primary" onClick={handleAddUser}>Add User</Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className='mt-5'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        {!user.loading && user.users.length ? (
                            <tbody>
                                {user.users.map((user,index) => (
                                    <tr key={user.id}>
                                        <td>{index}</td>
                                        <td>{user.name}</td>
                                        <td>{user.city}</td>
                                        <td>{user.number}</td>
                                    </tr>))}
                            </tbody>
                        ) : null}
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default UserGridView;