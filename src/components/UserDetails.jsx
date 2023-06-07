import React from 'react'
import DeleteAllUser from './DeleteAllUser';
import { styled } from 'styled-components';
import { fakeUserData } from '../api/api';
import { useDispatch } from 'react-redux';
import {addUser} from '../store/slices/UserSlice';
import DisplayUser from './DisplayUsers';


function UserDetails  ()  {

    const dispatch = useDispatch();

    const addNewUser =(payload)=> {
       console.log(payload);
       dispatch(addUser(payload));
    } 
  return (
      <Wrapper>
    <div className='content'>
        <div className='admin-table'>
        <div className='admin-subtitle'>List of User Details</div>
        <button className='btn add-btn' onClick={ () => addNewUser(fakeUserData())}>Add new User</button>
        </div>
        <ul>
            <DisplayUser />
        </ul>
        <hr />
        <DeleteAllUser />
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;


export default UserDetails;