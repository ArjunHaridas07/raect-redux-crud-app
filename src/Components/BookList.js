import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../actions/books';
import BookForm from './BookForm';
import './BookList.css';
import { Button } from 'react-bootstrap';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [selectedBook, setSelectedBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
  };

  const closeEditForm = () => {
    setIsEditing(false);
  };

  return (
    <div className='container'>
      {!isEditing && (
        <>
          <h2 className='text-center mt-2'>Book List</h2>
          {books.length === 0 ? (
            <p className='text-center'>No Books Available..Please Add Some Books!</p>
          ) : (
            <div className='book-container'>
              {books.map((book) => (
                <div key={book.id} className='book-item'>
                  <div className='book-details'>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Quantity:</strong> {book.quantity}</p>
                    <p><strong>Price:</strong> ${book.price}</p>
                  </div>
                  <div className='button-group'>
                    <Button variant='primary' onClick={() => handleEdit(book)}>Edit</Button>
                    <Button variant='dark' onClick={() => handleRemove(book.id)}>Remove</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
   
      {isEditing && selectedBook && (
        <div style={{marginTop:'-30px'}}>
          <BookForm
            bookToUpdate={selectedBook}
            onCloseForm={closeEditForm}
            onUpdate={handleUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default BookList;
