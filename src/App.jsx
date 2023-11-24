
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';
import Header from './Components/Header';
import { Col, Row, Button } from 'react-bootstrap';




const App = () => {
  const [showBookList, setShowBookList] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleShowBookList = () => {
    setShowBookList(true);
    setShowAddForm(false); 
  };

  const handleShowBookForm = () => {
    setShowBookList(false);
    setShowAddForm(prevState => !prevState); 
  };

  return (
    <Provider store={store}>
      <div>
        <Header />
       
        <Row className='text-center'>
          <Col className='d-flex justify-content-center'>
            <Button style={{fontSize:'20px'}} className=' w-25 mt-5 mr-2 me-5' onClick={handleShowBookList}>Book List</Button>
            <Button style={{fontSize:'20px'}}  className=' w-25 mt-5' onClick={handleShowBookForm}>
              {showAddForm ? 'Add Book' : 'Add Book'}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {showBookList ? <BookList /> : null} 
            {showAddForm ? <BookForm /> : null} 
          </Col>
        </Row>
       
      </div>
    </Provider>
    
  );
};

export default App;





