import FormActionConstant from "../constant/searchAction";
import { intialStatePropType } from "../constant/data";

const intialState : intialStatePropType = {
    data : [],
    statusMessage:'',
    isFetchLoading : false,
    firstName : '',
    lastName : '',
    topic : ''
}

type FormListPropsType = {
    type : string,
    payload : {
        data : [],
        firstName : string,
        lastName : string,
        topic : string
    }
}

const formlistReducer=(state :intialStatePropType = intialState, action : FormListPropsType):intialStatePropType=>{
    const {payload} = action;
    switch(action.type){
        case FormActionConstant.FETCH_UNPLASH_IMAGE_SUCESS:
            return {
                ...state,
                data :payload.data,
                firstName : payload.firstName,
                lastName : payload.lastName,
                topic : payload.topic,
                isFetchLoading:false
            }    
        case FormActionConstant.FETCH_UNPLASH_IMAGE_INITIATE:
            return {
                ...state,
                isFetchLoading:true
            }
        case FormActionConstant.UPDATE_SELECTED_ITEM_LIST:
            return {
                ...state,
                data :payload.data
            }    
        case FormActionConstant.FETCH_UNPLASH_IMAGE_ERROR:
            return {
                ...state,
                data :[],
                statusMessage:'No Result Found',
                isFetchLoading:false
            }
        case FormActionConstant.RESET_DATA_FIELDS:
            return {
                ...state,
                data :[],
                statusMessage : '',
                isFetchLoading:false
            }            
        default : return state    
        
    }
}

export default formlistReducer