import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name : 'user',
    initialState : [],
    reducers : {
        addUser (state , action) {
            state.push(action.payload)      // adding data to state
                                             //micro reducers
        },
        removeUser (state , action) {
            state.splice(action.payload , 1)
        },
        clearAllUser (state , action) {
            return [];
        },
    },
})

console.log(UserSlice.actions);
export default UserSlice.reducer ;
export const {addUser , removeUser , clearAllUser} = UserSlice.actions;