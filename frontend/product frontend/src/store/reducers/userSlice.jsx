import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    users:[],
}
const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        loadUser:(state,action)=>{
            state.users = action.payload 


        }
    },
});
export const {loadUser} = userSlice.actions;
export default userSlice.reducer;