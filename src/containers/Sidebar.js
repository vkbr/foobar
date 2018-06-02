import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openModal } from '../reducers/modal';
import Sidebar from '../components/Sidebar';
import {
	deleteProject,
	getAllProjects,
	selectProject,
	updateTempData
} from '../reducers/projects';

const mapStateToProps = state => ({
	uiMode: state.ui.mode,
	projects: getAllProjects(state),
	selectedProjectId: state.projects.selectedId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	deleteProject,
	openModal,
	selectProject,
	updateTempData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
