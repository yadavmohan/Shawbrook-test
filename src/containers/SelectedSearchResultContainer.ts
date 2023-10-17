import { connect } from 'react-redux';
import SelectedResultList from "../pages/selectedResultlList/selectedResultList";
import FormActionConstant from "../constant/searchAction";

type DispatchProps = {
    resetdatalistapi : ()=> void
}

const mapStateToProps = (state:any) => ({
    formDetailsState : state.formGridReducers,
    formlistState : state.formlistReducer
})
const mapDispatchToProps = (dispatch: (action: any) => void): DispatchProps => ({
    resetdatalistapi : (()=>{
        dispatch({type : FormActionConstant.RESET_DATA_FIELDS})
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectedResultList);
