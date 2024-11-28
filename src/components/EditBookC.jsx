import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editBook } from '../Redux/slice/bookSlice';

const EditBookC =() => {

    const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((b) => b.id === parseInt(id)));
  const [form, setForm] = useState(book);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook(form));
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
      <h1>Edit Book</h1>
      <label>Title</label>
      <input
        style={inputStyle}
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <label>Author</label>
      <input
        style={inputStyle}
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        required
      />
      <button style={buttonStyle}>Save Changes</button>
    </form>
    </div>
  )
}
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' };
const buttonStyle = { padding: '10px', backgroundColor: '#ffc107', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };


export default EditBookC
