import axios from "axios";
import { Dispatch } from "redux";
import FormActionConstant from "../constant/searchAction";
import { getsearchDataProps } from "../types/dataType";
import { CLIENTID } from "../constant/data";
const base_url = "https://api.unsplash.com";

export const getSearchList = (payload: getsearchDataProps) => async (dispatch : Dispatch) => {
  try {
    const { limit, searchData, userFirstName, userlastName } = payload;

    dispatch({
      type: FormActionConstant.FETCH_UNPLASH_IMAGE_INITIATE,
    });

    const response = await axios.get(`${base_url}/search/photos`, {
            params: { query: searchData, per_page: limit},
            headers: {
                Authorization: `Client-ID ${CLIENTID}`
            }
        });
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


