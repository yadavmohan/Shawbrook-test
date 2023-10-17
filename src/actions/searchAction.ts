import FormActionConstant from "../constant/searchAction";
import axios from "axios";

export const getSearchList=(payload:any)=>(dispatch:any)=>{
    return new Promise(async (resolve, reject) => {
        const { limit, searchData, userFirstName, userlastName } = payload;
        dispatch({
            type : FormActionConstant.FETCH_UNPLASH_IMAGE_INITIATE
        })
        await axios.get(`/napi/search/photos?query=${searchData}&per_page=${limit}`).then((response)=>{
            const {data, status} = response;
            if(status === 200 && data?.results.length === 0){
                dispatch({
                    type : FormActionConstant.FETCH_UNPLASH_IMAGE_ERROR,
                    payload : {
                        data : []
                    }
                })
            }else {
                dispatch({
                    type : FormActionConstant.FETCH_UNPLASH_IMAGE_SUCESS,
                    payload : {
                        data : data?.results,
                        firstName : userFirstName,
                        lastName : userlastName,
                        topic : searchData
                    }
                })
            }  
        }).catch((err)=>{
            console.log(err)
        })
    })
}

export const onSelectedItemChangeAction=(data:any)=>(dispatch:any)=>{
    if(data !== ''){
        dispatch({
            type : FormActionConstant.SELECTED_ITEM_LIST_SUCCESS,
            payload : {
                data,
            }
        })
    }
}

export const removeChangeHandler=(data:any)=>(dispatch:any)=>{
        dispatch({
            type : FormActionConstant.UPDATE_SELECTED_ITEM_LIST,
            payload : {
                data,
            }
        })
}


