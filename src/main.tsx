import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const element1 = React.createElement(
  'div',
  { className: 'test' },
  'Hello world'
);
const element2 = React.createElement('div', { className: 'test' }, [
  'Hello',
  'world',
  'as array child',
]);
const element3 = React.createElement('div', {
  className: 'test',
  children: 'Hello World for child prop',
});

const element4 = React.createElement(
  'div',
  { className: 'test' },
  true ? 'Hello world' : 'no word'
);

const element5 = React.createElement(
  'div',
  { className: 'test' },
  [1, 2, 3, 4].map((v) => `Hello world ${v}`)
);

ReactDOM.createRoot(document.getElementById('root')!).render([
  element1,
  element2,
  element3,
  element4,
  element5,
]);
