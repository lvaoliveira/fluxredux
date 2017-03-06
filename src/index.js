import React from 'react';
import ReactDOM from 'react-dom';
import main from './components/main/main';
import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(main),
    document.getElementById('mount'),
  );
});
