import {GET_CONTACT_LOAD,GET_CONTACT_FAIL,GET_CONTACT_SUCESS, GET_CONTACT, EDIT_CONTACT} from '../constant/action-types';

const initialState = {
  contacts: [],
  loadContacts: false,
  user: {},
  editContact:"",
  error:{}
};
export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACT_SUCESS:
      return { ...state, contacts: payload, loadContacts: false };

    case GET_CONTACT_FAIL:
      return { ...state, loadContact: false, error: payload };
    
    case GET_CONTACT:
      return{...state,user: payload}

    case EDIT_CONTACT:
      return {...state, editContact: payload}  
    default:
      return state;
  }
};
