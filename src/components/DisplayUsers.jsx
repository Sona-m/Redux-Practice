
import {useSelector , useDispatch} from 'react-redux';
import {MdDeleteForever} from 'react-icons/md';
import {removeUser} from '../store/slices/UserSlice';

function DisplayUser (){
    const data = useSelector((state) => {    //use selector is for getting the data from the store
        return state.users;
    })

    const dispatch = useDispatch();

    const deleteUser = (id)=> {
      dispatch(removeUser(id))
    }
 
    console.log(data);
  return(
      <>
       {
           data.map((user , id) => {
               return(
                   <li key={id}>{user}
                   <button className="btn btn-delete" onClick={()=> deleteUser(id)}>
                       <MdDeleteForever className = "delete-icon" />
                   </button>
                   </li>
                   

               )
           })
       }
      </>
  )
}



export default DisplayUser ;