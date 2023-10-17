import { connect } from 'react-redux';
import SelectedResultList from "../pages/selectedResultlList/selectedResultList";

const mapStateToProps = (state:any) => ({
    formDetailsState : state.formGridReducers,
    formlistState : state.formlistReducer
})

export default connect(mapStateToProps)(SelectedResultList);
