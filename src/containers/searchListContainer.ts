import { connect } from 'react-redux';
import SearchResultList from "../pages/searchResult/searchResultList";
import FormActionConstant from "../constant/searchAction";
import { onSelectedItemChangeAction, removeChangeHandler } from "../actions/searchAction";

type DispatchProps = {
    onSelectedItemChangeHandler: (data: any) => void; 
    removeChangeHandler:(data: any) => void;
    resetdatalistapi : ()=> void
}

const mapStateToProps = (state:any) => ({
    formlistState : state.formlistReducer
})
const mapDispatchToProps = (dispatch: (action: any) => void): DispatchProps => ({
    onSelectedItemChangeHandler: (data:any) => {
        dispatch(onSelectedItemChangeAction(data));
    },
    removeChangeHandler :(data:any)=>{
        dispatch(removeChangeHandler(data));
    },
    resetdatalistapi : (()=>{
        dispatch({type : FormActionConstant.RESET_DATA_FIELDS})
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultList);
