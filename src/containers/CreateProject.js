import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateProject from '../components/CreateProject';
import { closeModal } from '../reducers/modal';
import {
	addProject,
	updateTempData,
} from '../reducers/projects';

const mapStateToProps = state => ({
	tempData: state.projects.tempData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	addProject,
	closeModal,
	updateTempData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
