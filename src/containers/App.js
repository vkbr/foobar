import React from 'react';
import { connect } from 'react-redux';

import Previewer from '../components/Previewer';
import FileLoader from '../components/FileLoader';
import Toolbox from '../components/Toolbox';

import './App.scss';

const App = ({ fileIsLoaded }) => (
	<div className="app">
		{fileIsLoaded ? <Previewer /> : <FileLoader />}
		<Toolbox />
	</div>
);

const mapStateToProps = state => ({
	fileIsLoaded: false,
});

export default connect(mapStateToProps)(App);
