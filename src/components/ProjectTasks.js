import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SearchIcon from '@material-ui/icons/Search';

import { tasks } from '../constants/propDefinitions';
import TaskAction from './common/TaskAction';

import './ProjectTasks.scss';

class ProjectTasks extends Component {
	state = {
		filter: '',
	};

	filterCmd(tasks) {
		const { filter } = this.state;

		return tasks.filter(task => task.cmd.includes(filter) || task.name.includes(filter));
	}

	render() {
		const { openModal, projectId, tasks } = this.props;
		return (
			<div className="project-tasks">
				<h3 className="project-task-headding">
					<div className="project-task-headding__text">
						<span>Tasks</span>
						<IconButton onClick={() => openModal('CREATE_TASK', { projectId })}>
							<AddIcon />
						</IconButton>
					</div>
					<Input
						className="project-task-headding__search"
						onChange={e => this.setState({ filter: e.target.value })}
						value={this.state.filter}
						endAdornment={
							<InputAdornment position="end">
								<IconButton disabled={this.state.filter === ''}>
									{
										this.state.filter === '' ?
											<SearchIcon /> :
											<ClearIcon
												onClick={() => this.setState({ filter: '' })}
											/>
									}
								</IconButton>
							</InputAdornment>
						}
					/>
				</h3>
				<div className="task-list-container">
					<List>
						{
							this.filterCmd(tasks).map(task => (
								<ListItem button key={task.id}>
									<ListItemText
										primary={task.name}
										secondary={task.cmd}
									/>
									<ListItemSecondaryAction>
										<TaskAction />
									</ListItemSecondaryAction>
								</ListItem>
							))
						}
					</List>
				</div>
			</div>
		);
	}
}

ProjectTasks.propTypes = {
	openModal: PropTypes.func.isRequired,
	projectId: PropTypes.string.isRequired,
	tasks: tasks.isRequired,
};

export default ProjectTasks;
