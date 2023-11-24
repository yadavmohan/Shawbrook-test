import axios from "axios";
import { Dispatch } from "redux";
import FormActionConstant from "../constant/searchAction";
import { getsearchDataProps } from "../types/dataType";

export const getSearchList = (payload: getsearchDataProps) => async (dispatch : Dispatch) => {
  try {
    const { limit, searchData, userFirstName, userlastName } = payload;

    dispatch({
      type: FormActionConstant.FETCH_UNPLASH_IMAGE_INITIATE,
    });

    const response = await axios.get(
      `/napi/search/photos?query=${searchData}&per_page=${limit}`
    );
    const { data, status } = response;
    if (status === 200) {
      if (data?.results.length === 0) {
        dispatch({
          type: FormActionConstant.FETCH_UNPLASH_IMAGE_ERROR,
          payload: {
            data: [],
          },
        });
      } else {
        dispatch({
          type: FormActionConstant.FETCH_UNPLASH_IMAGE_SUCESS,
          payload: {
            data: data.results,
            firstName: userFirstName,
            lastName: userlastName,
            topic: searchData,
          },
        });
      }
    }
  } catch (error) {
    console.error("error", error);
  }
};


export const onSelectedItemChangeAction=(data:any)=>(dispatch:Dispatch)=>{
    if(data !== ''){
        dispatch({
            type : FormActionConstant.SELECTED_ITEM_LIST_SUCCESS,
            payload : {
                data,
            }
        })
    }
}

export const removeChangeHandler=(data:any)=>(dispatch:Dispatch)=>{
        dispatch({
            type : FormActionConstant.UPDATE_SELECTED_ITEM_LIST,
            payload : {
                data,
            }
        })
}


