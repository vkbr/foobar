import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content';
import Modal from './Modals';

import './App.scss';

const App = () => (
	<div className="app">
		<Sidebar />
		<Content />
		<Modal />
	</div>
);

export default App;
