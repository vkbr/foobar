import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProjectViewer from '../components/ProjectViewer';
import { updateProject } from '../reducers/projects';

const mapStateToProps = state => {
	const { projects } = state;
	const selectedProject = projects.byId[projects.selectedId];

	return {
		selectedProject,
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({
	updateProject,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectViewer);