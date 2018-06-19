import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

import { tasks } from '../constants/propDefinitions';

import './ProjectTasks.scss';

const styles = {
	searchIcon: { color: '#ccc' },
};

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
					<span className="project-task-headding__text">
						Tasks
						<IconButton onClick={() => openModal('CREATE_TASK', { projectId })}>
							<AddIcon />
						</IconButton>
					</span>
					<Input
						onChange={e => this.setState({ filter: e.target.value })}
						value={this.state.filter}
						endAdornment={
							<InputAdornment position="end">
								{
									this.state.filter === '' ?
										<SearchIcon style={styles.searchIcon} /> :
										<ClearIcon
											style={styles.searchIcon}
											onClick={() => this.setState({ filter: '' })}
										/>
								}
							</InputAdornment>
						}
					/>
				</h3>
				<div className="task-list-container">
					<List>
						{
							this.filterCmd(tasks).map(task => (
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
