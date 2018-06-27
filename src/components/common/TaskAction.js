import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const TaskAction = ({ status }) => (
	<IconButton status={status}>
		<PlayArrowIcon />
	</IconButton>
);

TaskAction.propTypes = {
	status: PropTypes.oneOf(['running', 'starting', 'stopped']).isRequired,
};

export default TaskAction;
