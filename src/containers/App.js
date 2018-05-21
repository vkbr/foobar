import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import Project from '../components/Project';
import { openCreateProject } from '../reducers/ui';

import './App.scss';

const App = ({ isLoaded, openCreateProject, uiMode }) => (
	<div className="app">
		<Sidebar openCreateProject={openCreateProject} />
		<Project />
	</div>
);

const mapStateToProps = state => ({
	uiMode: state.ui.mode,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
	openCreateProject
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
