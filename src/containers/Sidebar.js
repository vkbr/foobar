import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllProjects, updateTempData } from '../reducers/projects';
import { openModal } from '../reducers/modal';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
	uiMode: state.ui.mode,
	projects: getAllProjects(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
	openModal,
	updateTempData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
