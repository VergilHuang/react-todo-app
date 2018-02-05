import React from 'react';
import {modifyUser} from '../actions/actions.js'

const User = ({name, motto, dispatch}) => {

	const handleMottoChange = (event) => {
		dispatch(modifyUser(event.target.value))
	}

    return (
      <div className="user-view">
        <label>{name}</label> - <input value={motto} onChange={handleMottoChange}/>
      </div>
    );
};

export default User;
