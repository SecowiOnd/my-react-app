import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./auth-reducer";

const INITIALAIZED_SUCCESS = "INITIALAIZED_SUCCESS";


let initialState = {
    initialized: false
};

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALAIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}



export const initializedSuccess = () => ({ type: INITIALAIZED_SUCCESS });
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then (()=>{
        dispatch(initializedSuccess());
    });    
};

export default appReduser;
