import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ProjectViewer from './ProjectViewer';
import CreateProject from './CreateProject';
import { MODES } from '../reducers/ui';

const Content = () => (
	<ProjectViewer />
);

const mapStateToProps = state => ({
	uiMode: state.ui.mode
});

export default connect(/* mapStateToProps */)(Content);
