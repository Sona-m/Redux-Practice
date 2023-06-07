import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAllUser } from '../store/slices/UserSlice';

const DeleteAllUser = () => {

    const dispatch = useDispatch();    // use for updating data to store

    const deleteAllUser = ()=> {
       dispatch(clearAllUser())
    }
  return (
    <div style ={{margin : '20px' }}>
        <button className='btn delete-btn' onClick={() => deleteAllUser()}>Clear Users</button>
    </div>
  )
}

export default DeleteAllUser