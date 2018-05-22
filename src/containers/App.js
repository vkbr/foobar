import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content';

import './App.scss';

const App = () => (
	<div className="app">
		<Sidebar />
		<Content />
	</div>
);

export default App;
