import axios from "../../api/axiosconfig";
import { loadProducts } from "../reducers/productSlice";
import { loadUser } from "../reducers/userSlice";
//funcition inside function is called here

export const asyncloadproducts = () => async (dispatch,getState) => {
    try{
        const response = await axios.get("/products");
        dispatch(loadProducts(response.data));
    }
    catch(error){
        console.log(error);
    }
}
export const asyncupdateproduct=(id,product) => async (dispatch,getState) => {
    try{
        console.log("asyncupdateproduct - product:", product);
        const response = await axios.patch(`/products/${id}`, product);
        dispatch(asyncloadproducts());
        console.log(response);
    }
    catch(error){
        console.log(error);

    }
    
}

export const asyncdeleteproduct=(id) => async (dispatch,getState) => {
    try{
        const response = await axios.delete(`/products/${id}`);
        dispatch(asyncloadproducts());
        console.log(response);
    }
    catch(error){
        console.log(error);

    }

}
export const asynccreateproduct =(product) => async (dispatch,getState) => { 
    try{
        console.log("current state "+getState())
        const response = await axios.post("/products", product);
        dispatch(asyncloadproducts());
        console.log(response);
    }
    catch(error){
        console.log(error);
        }

}
