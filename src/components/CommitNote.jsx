import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions.js';

let CommitNote = ({ state, dispatch }) => {

  const onKeyup = (event) => {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      dispatch(addTodo(event.nativeEvent.target.value));
      event.target.value = '';
    }
  };
  return (
    <div className="commit">
      <input style={{display: state.visibility.commitVisibility ? '' : 'none'}} placeholder="Something to note about ..." onKeyUp={onKeyup}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  state
});

CommitNote = connect(mapStateToProps)(CommitNote);

export default CommitNote;