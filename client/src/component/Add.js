import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { editContact, postContact } from '../JS/action/action';

const Add = () => {
  const [user, setUser] = useState({ fullName: '', email: '' });
  const userReducer = useSelector((state) => state.contactReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    edit ? setUser(userReducer) : setUser({ fullName: '', email: '' });
  }, [userReducer, edit]);

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleContact = () => {
    if (!edit) {
      dispatch(postContact(user));
    } else {
      dispatch(editContact(userReducer._id, user));
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Put your email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleContact}>
          {edit ? 'EDIT' : 'ADD'}
        </Button>
      </Form>
    </div>
  );
};

export default Add;
