import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './Resource/css/screen.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer/index.js';
import { addBatchTodo } from './actions/actions.js';

const store = createStore(reducer);

//初始化資料
store.dispatch(addBatchTodo([{
  id: '888888888',
  title: '第一個',
  description: '敘述1',
  status: 'undone'
},{
  id: '999999999',
  title: '第二個',
  description: '敘述2',
  status: 'undone'
},{
  id: '111111111',
  title: '第3個',
  description: '敘述3',
  status: 'completed'
}]));

function renderDom() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
}

renderDom();
registerServiceWorker();