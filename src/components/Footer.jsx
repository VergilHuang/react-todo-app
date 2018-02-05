import React from 'react';
import {connect} from 'react-redux';
import {completeTodo, deleteTodo} from '../actions/actions.js';

let Footer = ({ state, dispatch }) => {

	const itemFinished = () => {

		let checkboxs = document.querySelectorAll('input[id^=checkbox_]:checked');
		for (var i = checkboxs.length - 1; i >= 0; i--) {
		  dispatch(completeTodo(checkboxs[i].value));
		}
	}

	const itemDelete = () => {

		let checkboxs = document.querySelectorAll('input[id^=checkbox_]:checked');
		for (var i = checkboxs.length - 1; i >= 0; i--) {
		  dispatch(deleteTodo(checkboxs[i].value));
		}
	}

    return (
        <div>
          <button onClick={itemFinished}>完成</button>
          <button onClick={itemDelete}>刪除</button>
          <button style={{display:'none'}}>復原</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
	state
})

Footer = connect(mapStateToProps)(Footer)

export default Footer;
