import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const ProjectTasks = ({ openModal, projectId }) => (
	<div className="project-tasks">
		<h3 className="project-task-headding">
			<span className="project-task-headding__text">
				Tasks
				<IconButton
					mini
					onClick={() => openModal('CREATE_TASK', { projectId })}
				>
					<AddIcon />
				</IconButton>
			</span>
			<Input endAdornment={<SearchIcon style={{ color: '#ccc' }} />} />
		</h3>
	</div>
);

ProjectTasks.propTypes = {
	openModal: PropTypes.func.isRequired,
	projectId: PropTypes.string.isRequired,
};

export default ProjectTasks;
