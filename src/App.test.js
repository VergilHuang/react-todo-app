import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import TodoApi from './api.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('add success', () => {
  TodoApi.add('test case');
  const todoItem = TodoApi._getFirst();
  expect(todoItem.title).toBe('test case');
});

test('delete success', () => {
  TodoApi.add('test case');
  let todoItem = TodoApi._getFirst();
  expect(todoItem.title).toBe('test case');
  TodoApi._deleteFirst();
  expect(todoItem.status).toBe(3);
});