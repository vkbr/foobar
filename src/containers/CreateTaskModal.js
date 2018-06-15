import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeModal } from '../reducers/modal';
import { createProjectTask } from '../reducers/projects';
import CreateTaskModal from '../components/CreateTaskModal';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			closeModal,
			createProjectTask,
		},
		dispatch
	);

export default connect(
	null,
	mapDispatchToProps
)(CreateTaskModal);
