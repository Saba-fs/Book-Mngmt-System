import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from '../Redux/slice/bookSlice';

const BookListC = () => {

    const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div >
      <h1>Book List</h1>
      <Link to="/add" style={buttonStyle}>Add Book</Link>
      <ul style={listStyle}>
        {books.map((book) => (
          <li key={book.id} style={itemStyle}>
            <div>
              <strong>{book.title}</strong> by {book.author}
            </div>
            <div>
              <Link to={`/edit/${book.id}`} style={buttonStyle}>Edit</Link>
              <button onClick={() => handleDelete(book.id)} style={deleteButtonStyle}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
const buttonStyle = {
    margin: '6px',
    padding: '5px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  };
  
  const deleteButtonStyle = { ...buttonStyle, backgroundColor: '#DC3545', };
  const listStyle = { listStyle: 'none', padding: 0 };
  const itemStyle = { display: 'flex', justifyContent: 'space-between', marginBottom: '10px' };
  

export default  BookListC
