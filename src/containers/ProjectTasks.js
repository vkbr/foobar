import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectTasks from '../components/ProjectTasks';
import { openModal } from '../reducers/modal';

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			openModal,
		},
		dispatch
	);

export default connect(
	null,
	mapDispatchToProps
)(ProjectTasks);
