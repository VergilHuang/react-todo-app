import React from 'react';
import {connect} from 'react-redux';
import {modifyUser} from '../actions/actions.js';

let User = ({name, motto, dispatch}) => {

  const handleMottoChange = (event) => {
    dispatch(modifyUser(event.target.value));
  };

  return (
    <div className="user-view">
      <label>{name}</label> - <input value={motto} onChange={handleMottoChange}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.userInfo.name,
  motto: state.userInfo.motto
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
	
});


User = connect(mapStateToProps,mapDispatchToProps)(User);

export default User;
