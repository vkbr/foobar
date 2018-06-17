import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

const ProjectTasks = ({ openModal, projectId, tasks }) => (
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
		<List>
			{
				tasks.map(task => (
					<ListItem key={task.id}>
						<ListItemText
							primary={task.name}
							secondary={task.cmd}
						/>
					</ListItem>
				))
			}
		</List>
	</div>
);

ProjectTasks.propTypes = {
	openModal: PropTypes.func.isRequired,
	projectId: PropTypes.string.isRequired,
};

export default ProjectTasks;
