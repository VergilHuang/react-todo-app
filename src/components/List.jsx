import React from 'react';
import { Route } from 'react-router-dom';
import {UndoneContainer,FinishedContainer,DeletedContainer} from '../containers/Todo-container.js';

const List = () => {

  return (
    <div>
      <Route exact path="/" component={UndoneContainer}></Route>	
      <Route path="/finished" component={FinishedContainer}></Route>	
      <Route path="/deleted" component={DeletedContainer}></Route>	
    </div>
  );

};

export default List;