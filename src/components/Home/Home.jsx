import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers } from 'redux/users/userSelectors';
import { delUser } from 'redux/users/usersSlice';

const Home = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  console.log(users);

  return (
    <div>
      <ul>
        {users.map(({ id, name, age, status }) => (
          <li key={id}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Status: {status}</p>
            <button type="button" onClick={() => dispatch(delUser(id))}>
              Delete user
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
