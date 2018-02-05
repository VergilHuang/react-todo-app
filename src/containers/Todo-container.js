import { connect } from 'react-redux';
import UndoneList from '../components/UndoneList.jsx';
import FinishedList from '../components/FinishedList.jsx';
import DeleteList from '../components/DeleteList.jsx';

const mapStateToProps = (state) => ({
	todos: state.todos
})


const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
})

export const UndoneContainer = connect(mapStateToProps,mapDispatchToProps)(UndoneList)
export const FinishedContainer = connect(mapStateToProps,mapDispatchToProps)(FinishedList)
export const DeletedContainer = connect(mapStateToProps,mapDispatchToProps)(DeleteList)

