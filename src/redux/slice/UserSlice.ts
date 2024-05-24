import {createSlice} from '@reduxjs/toolkit';

interface UserState{
    currentUser:string;
}
const initialState:UserState={
    currentUser:'',
}
const UserSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        setCurrentUser:(state,action)=>{
            state.currentUser=action.payload;
        }
    }
})
export const {setCurrentUser}=UserSlice.actions;
export default UserSlice.reducer;