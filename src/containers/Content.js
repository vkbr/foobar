import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Project from '../components/Project';
import CreateProject from './CreateProject';
import { MODES } from '../reducers/ui';

const Content = ({ uiMode }) => (
	<Fragment>
		{uiMode === MODES.CREATE ? <CreateProject /> : <Project />}
	</Fragment>
);

const mapStateToProps = state => ({
	uiMode: state.ui.mode
});

export default connect(mapStateToProps)(Content);
