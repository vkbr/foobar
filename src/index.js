import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './createStore';
import './styles/main.scss';

import App from './containers/App';

render(
	<Provider store={createStore()}>
		<App />
	</Provider>,
	document.getElementById('root')
);
