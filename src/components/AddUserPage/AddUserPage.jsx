import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { addUser } from '../../redux/users/usersSlice';
import { useDispatch } from 'react-redux';

const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
      return;
    }

    setAge(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name,
      age,
      status: 'oflline',
    };

    dispatch(addUser(newUser));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Age
          <input type="text" name="age" value={age} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
