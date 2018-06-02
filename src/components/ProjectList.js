import React from 'react';
import DeleteOutline from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import AnimZoomIn from './common/AnimZoomIn';
import { PRIMARY } from '../constants/colors';
import './ProjectList.scss';

const styles = {
	baseListItem: {
		borderRight: '2px solid transparent',
	},
	selectedListItem: {
		borderRight: `2px solid ${PRIMARY}`,
		color: PRIMARY,
	}
};

const ProjectList = ({
	deleteProject,
	projects,
	selectedProjectId,
	selectProject,
}) => {
	const noProject = projects.length === 0;

	return (
		<div className={`project-list-wrapper ${noProject ? 'empty-list' : ''}`}>
			{noProject ? (
				<div className="no-project-info">No project added yet.</div>
			) : (
				<List className="project-list" component="nav">
					{projects.map(({id, name}) => (
						<ListItem
							button
							className="project-list__item"
							key={id}
							style={id === selectedProjectId ? styles.selectedListItem : styles.baseListItem}
							onClick={() => selectProject(id)}
						>
							<AnimZoomIn >
								{name}
							</AnimZoomIn>
							<ListItemSecondaryAction className="project-action-item">
								<IconButton onClick={() => deleteProject(id)}>
									<DeleteOutline />
								</IconButton>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			)}
		</div>
	);
};

export default ProjectList;
