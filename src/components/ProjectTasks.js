import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const ProjectTasks = ({ openModal, projectId }) => (
	<div className="project-tasks">
		<h3 className="project-task-headding">
			<span className="project-task-headding__text">
				Tasks
				<IconButton onClick={() => openModal('CREATE_TASK', { projectId })}>
					<AddIcon />
				</IconButton>
			</span>
			<Input
				endAdornment={
					<InputAdornment position="end">
						<SearchIcon style={{ color: '#ccc' }} />
					</InputAdornment>
				}
			/>
		</h3>
	</div>
);

ProjectTasks.propTypes = {
	openModal: PropTypes.func.isRequired,
	projectId: PropTypes.string.isRequired,
};

export default ProjectTasks;
