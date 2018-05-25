import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import './ProjectList.scss';

const ProjectList = ({ projects, selectedProjectId }) => {
	const noProject = projects.length === 0;

	return (
		<div className={`project-list-wrapper ${noProject ? 'empty-list' : ''}`}>
			{noProject ? (
				<div className="no-project-info">No project added yet.</div>
			) : (
				<List className="project-list" component="nav">
					{projects.map(project => (
						<ListItem
							button
							key={project.id}
							className={project.id === selectedProjectId ? 'active' : ''}
						>
							{project.name}
						</ListItem>
					))}
				</List>
			)}
		</div>
	);
};

export default ProjectList;
