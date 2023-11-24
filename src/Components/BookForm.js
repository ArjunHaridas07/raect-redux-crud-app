import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../actions/books';
import './BookForm.css';

const BookForm = ({ bookToUpdate, onCloseForm, onUpdate }) => {
  const [title, setTitle] = useState(bookToUpdate ? bookToUpdate.title : '');
  const [author, setAuthor] = useState(bookToUpdate ? bookToUpdate.author : '');
  const [quantity, setQuantity] = useState(bookToUpdate ? bookToUpdate.quantity : '');
  const [price, setPrice] = useState(bookToUpdate ? bookToUpdate.price : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      quantity,
      price,
      id: bookToUpdate ? bookToUpdate.id : Date.now(),
    };

    if (bookToUpdate) {
      dispatch(updateBook(newBook));
      onUpdate();
    } else {
      dispatch(addBook(newBook));
      alert('Book added successfully!'); 
    }

    setTitle('');
    setAuthor('');
    setQuantity('');
    setPrice('');
  };

  useEffect(() => {
    if (bookToUpdate) {
      setTitle(bookToUpdate.title);
      setAuthor(bookToUpdate.author);
      setQuantity(bookToUpdate.quantity);
      setPrice(bookToUpdate.price);
    }
  }, [bookToUpdate]);

  return (
    <div className='container w-50 text-center'>
      <h2>{bookToUpdate ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          className='mb-3'
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required 
        /> 
        <input
          className='mb-3'
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          className='mb-3'
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          className='mb-3'
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">{bookToUpdate ? 'Update' : 'Add'}</button>
        {bookToUpdate && (
          <button type="button" onClick={onCloseForm}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default BookForm;
