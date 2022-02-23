import './App.css';
import ContactList from './component/ContactList';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import { useDispatch } from 'react-redux';
import { editFalse, editTrue } from './JS/action/edit';
import { Button } from 'react-bootstrap';
import Add from './component/Add';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Link to={'/'}>
        <Navbar />
      </Link>
      {/* <Link to={'/api/contact/add'}>
        <Button variant="warning" onClick={() => dispatch(editFalse())}>
          Add contact
        </Button>
      </Link>
      <Link to={'/api/contact/edit/:id'}>
        <Button variant="danger" onClick={() => dispatch(editTrue())}>
          Edit contact
        </Button>
      </Link> */}
      <Routes>
        <Route path="/api/contact" element={<ContactList />} />
        <Route path="/api/contact/edit/:id" element={<Add />} />
        <Route path="/api/contact/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
