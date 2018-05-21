import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Previewer from '../components/Previewer';
import FileLoader from '../components/FileLoader';
import Toolbox from '../components/Toolbox';
import { initProject } from '../reducers/projects';

import './App.scss';

const App = ({ isLoaded }) => (
	<div className="app">
		{console.log({ isLoaded })}
		{isLoaded ? <Previewer /> : <FileLoader />}
		<Toolbox />
	</div>
);

const mapStateToProps = state => ({
	isLoaded: state.projects.isLoaded,
});

const mapDispatchToProps = (dispatch) => {
	dispatch(initProject());
	return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
