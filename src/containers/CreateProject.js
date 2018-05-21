import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateProject from '../components/CreateProject';

import { updateTempProjectData } from '../reducers/ui';

const mapStateToProps = state => ({
	tempCreateProjectData: state.ui.tempCreateProjectData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	updateTempProjectData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
