import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

const ProjectList = ({ projects, selectedProjectId, selectProject }) => {
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
							key={id}
							style={id === selectedProjectId ? styles.selectedListItem : styles.baseListItem}
							onClick={() => selectProject(id)}
						>
							<AnimZoomIn>
								{name}
							</AnimZoomIn>
						</ListItem>
					))}
				</List>
			)}
		</div>
	);
};

export default ProjectList;
