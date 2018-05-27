import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllProjects, selectProject, updateTempData } from '../reducers/projects';
import { openModal } from '../reducers/modal';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
	uiMode: state.ui.mode,
	projects: getAllProjects(state),
	selectedProjectId: state.projects.selectedId,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	openModal,
	selectProject,
	updateTempData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
