import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { setConfig } from 'react-hot-loader'
// setConfig({ logLevel: 'debug' });

import createStore from './createStore';
import UserStore from './utils/UserStore';
import './styles/main.scss';

import App from './containers/App';

// module.hot.accept('./containers/App', () => {
// 	const NextRootContainer = require('./containers/App').default;
// 	render(
// 		<Provider store={createStore()}>
// 			<NextRootContainer />
// 		</Provider>,
// 		document.getElementById('root')
// 	);
// })

const store = createStore();

UserStore.subscribe(store);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
