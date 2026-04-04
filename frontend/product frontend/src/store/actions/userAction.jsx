import axios from "../../api/axiosconfig";
import { loadUser } from "../reducers/userSlice";
//funcition inside function is called here

export const asyncuserdetails = () => async (dispatch,getState) => {
    try{
        const response = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log(response);
}
    catch(error){
        console.log(error);

        }
}

export const asynccurrentuser = () => async (dispatch,getState) => {
    try{
        const user = JSON.parse(localStorage.getItem("user"));
        if(user) dispatch(loadUser(user));
        else alert("User not logged in"); 
    }
    catch(error){
        console.log(error);
        }
}
export const asynclogoutuser = () => async (dispatch,getState) => {
    try{
        localStorage.removeItem("user");
        dispatch(loadUser(null));
    }
    catch(error){
        console.log(error);
    }
}
export const asyncloginuser = (user) => async (dispatch,getState) => {
    try{
        //user finding logic
        
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log(data);
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]));
        }
    catch(error){
        console.log(error);

    
    }

}
export const asyncupdateuser = (id,user) => async (dispatch,getState) => {
    try{
        const {data } = await axios.patch(`/users/${id}`, user);
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(loadUser(data));
        // dispatch(asynccurrentuser());
    }
    catch(error){
        console.log(error);
    }
}

export const asyncdeleteuser = (id) => async (dispatch,getState) => {
    try{
        const response = await axios.delete(`/users/${id}`);
        dispatch(asynclogoutuser());
    }
    catch(error){
        console.log(error);
    }
}
export const asyncregisteruser =(user) => async (dispatch,getState) => { 
    try{
        console.log("current state "+getState())
        const response = await axios.post("/users", user);
        console.log(response);
    }
    catch(error){
        console.log(error);
        }

}
