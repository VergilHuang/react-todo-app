import {connect} from 'react-redux';
import User from '../components/User.jsx';

const mapStateToProps = (state) => ({
	name: state.userInfo.name,
	motto: state.userInfo.motto
})

const mapDispatchToProps = (dispatch) => ({
	dispatch: dispatch
	
})


const UserContainer = connect(mapStateToProps,mapDispatchToProps)(User);

export default UserContainer;