import axios from "../api/axiosconfig";
import { loadUser } from "./userSlice";
//funcition inside function is called here
export const asyncgetProducts =() => async (dispatch,getState) => { 
    try{
        console.log("current state "+getState())
        const response = await axios.get("/users");
        console.log(response);
        dispatch(loadUser(response.data)); 
    }
    catch(error){
        console.log(error);
        }

}
