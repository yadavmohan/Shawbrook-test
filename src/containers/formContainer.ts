import { connect } from 'react-redux';
import FormComponent from "../pages/formComponent/formComponent";
import { getSearchList } from "../actions/searchAction";

type DispatchProps = {
    getSearchList: (data: any) => void; 
}

const mapStateToProps = (state:any) => ({
    formlistState : state.formlistReducer
})
const mapDispatchToProps = (dispatch: (action: any) => void): DispatchProps => ({
    getSearchList: (data: any) => {
        dispatch(getSearchList(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
