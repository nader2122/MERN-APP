import React, { useEffect } from 'react';
import { getContacts } from '../JS/action/action';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Contact';
import { Dimmer, Loader, Image, Segment} from 'semantic-ui-react'




const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loadContacts = useSelector((state) => state.contactReducer.loadContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
  return (
    <div className='btn-back'>
 
      <div className='list'>
      {loadContacts ? (
        <Segment>
        <Dimmer active>
          <Loader size='massive'>Loading</Loader>
        </Dimmer>
  
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
               
      </Segment>
        
      ) : contacts.length === 0 ? (
        <h2>there is no contact</h2>
      ) : (
        contacts.map((el,_id) => <Contact key={_id} contact={el} />)
      )}
      </div>
    </div>
  );
};

export default ContactList;
