import FormActionConstant from "../constant/searchAction";
import { noResultText } from "../constant/data";

type resultInitialPropType = {
    selectedData: string[],
    statusMessage : string,
    isLoading : boolean
} 


const intialState:resultInitialPropType = {
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
const fromGridReducers=(state:resultInitialPropType = intialState, action : ResultPropsType) : resultInitialPropType=>{
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