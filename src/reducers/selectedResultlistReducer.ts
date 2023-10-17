import FormActionConstant from "../constant/searchAction";
import { noResultText } from "../constant/data";

const intialState = {
    selectedData : [],
    statusMessage:'',
    isLoading : false
}

type ResultPropsType = {
    type : string,
    payload : {
        data : [],
    }
}
const fromGridReducers=(state = intialState, action : ResultPropsType)=>{
    const {payload} = action;
    switch(action.type){
        case FormActionConstant.SELECTED_ITEM_LIST_SUCCESS:
            return {
                ...state,
                selectedData :payload.data,
                isLoading:false
            }    
        case FormActionConstant.SELECTED_ITEM_LIST_INITIATE:
            return {
                ...state,
                isLoading:true
            }
        case FormActionConstant.SELECTED_ITEM_LIST_ERROR:
            return {
                ...state,
                selectedData :[],
                statusMessage:noResultText,
                isLoading:false
            }        
        default : return state    
        
    }
}

export default fromGridReducers