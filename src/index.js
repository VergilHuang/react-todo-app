import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './Resource/css/screen.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { addTodo } from './actions/actions.js';

const store = createStore(reducer);

store.dispatch(addTodo('new a title'));

function renderDom(){
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'));	
}

renderDom();
registerServiceWorker();
