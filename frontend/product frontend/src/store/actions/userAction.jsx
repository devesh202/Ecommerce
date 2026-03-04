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
export const asynclogoutuser = () => async (dispatch,getState) => {
    try{
        localStorage.removeItem("user");
    }
    catch(error){
        console.log(error);
    }
}
export const asyncloginuser =(user) => async (dispatch,getState) => {
    try{
        //user finding logic
        
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]));
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
