import React from 'react';
import { remote } from 'electron';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import { MODES } from '../reducers/ui';
import ProjectList from './ProjectList';

import './Sidebar.scss';

const Sidebar = ({
	openModal,
	projects,
	selectedProjectId,
	selectProject,
	uiMode,
	updateTempData,
}) => (
	<Paper className="standard-paper sidebar">
		<h2 className="sidebar-heading">
			<span className="sidebar-heading__text">Projects</span>
			<IconButton
				className="add-project"
				onClick={() => {
					let pwd = remote
						.dialog
						.showOpenDialog({ properties: ['openDirectory'] });

					if (pwd === undefined) {
						return;
					} else {
						pwd = pwd[0];
					}

					const projectName = pwd
						.split(/\//g)
						.slice(-1)[0]
						.replace(/[^a-zA-Z\d]+/g, ' ')
						.replace(/^[a-zA-Z\d]/, $1 => $1.toUpperCase());

					updateTempData({ pwd, projectName });
					openModal('PROJECT_CREATE_BASIC');
				}}
				style={
					uiMode === MODES.CREATE ?
						{transform: 'rotate(45deg)'} :
						null
				}
			>
				<AddIcon />
			</IconButton>
		</h2>
		<ProjectList
			selectedProjectId={selectedProjectId}
			selectProject={selectProject}
			projects={projects}
		/>
	</Paper>
);

export default Sidebar;
