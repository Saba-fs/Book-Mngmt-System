import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/slice/bookSlice'
import { useNavigate } from 'react-router-dom';

const AddBookC=()=> {

    const [form, setForm] = useState({ title: '', author: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...form, id: Date.now() }));
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
      <h1>Add Book</h1>
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
      <button style={buttonStyle}>Add Book</button>
    </form>
    </div>
  )
}

const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };
const inputStyle = { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' };
const buttonStyle = { padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };


export default AddBookC
