import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { deleteContact, getContact } from '../JS/action/action';
import { Link } from 'react-router-dom';
import { editTrue } from '../JS/action/edit';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card.Group className="cards">
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-valid-user-icon-png-image_3989973.jpg"
            />
            <Card.Header>{contact.fullName}</Card.Header>
            <Card.Meta>{contact.email}</Card.Meta>
            <Card.Description>
              <strong>{contact.date}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Link to={`/api/contact/edit/${contact._id}`}>
                <Button
                  basic
                  color="green"
                  onClick={() => {
                    dispatch(getContact(contact._id));
                    dispatch(editTrue());
                  }}
                >
                  Edit
                </Button>
              </Link>
              <Button
                basic
                color="red"
                onClick={() => dispatch(deleteContact(contact._id))}
              >
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Contact;
