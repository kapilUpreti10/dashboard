import {createSlice} from '@reduxjs/toolkit';

interface UserState{
    currentUser:string;
    token:string;
}
const initialState:UserState={
    currentUser:'',
    token:''
}
const UserSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        setCurrentUser:(state,action)=>{
            console.log(action.payload);
            state.currentUser=action.payload.user;
            state.token=action.payload.accessToken;
        }
    }
})
export const {setCurrentUser}=UserSlice.actions;
export default UserSlice.reducer;