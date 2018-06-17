import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectTasks from '../components/ProjectTasks';
import { openModal } from '../reducers/modal';

const mapStateToProps = (state, ownProps) => {
	const { projects: { byId, tasksById } } = state;

	return {
		tasks: byId[ownProps.projectId].tasks.map(taskId => tasksById[taskId]),
	};
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			openModal,
		},
		dispatch
	);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectTasks);
