import React from 'react';
import PropTypes from 'prop-types';
import { remote } from 'electron';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import { projects as ProjectsDef } from '../constants/propDefinitions';
import ProjectList from './ProjectList';

import './Sidebar.scss';

const Sidebar = ({
	deleteProject,
	openModal,
	projects,
	selectedProjectId,
	selectProject,
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
					}

					[pwd] = pwd;

					const projectName = pwd
						.split(/\//g)
						.slice(-1)[0]
						.replace(/[^a-zA-Z\d]+/g, ' ')
						.replace(/^[a-zA-Z\d]/, $1 => $1.toUpperCase());

					updateTempData({ pwd, projectName });
					openModal('PROJECT_CREATE_BASIC');
				}}
			>
				<AddIcon />
			</IconButton>
		</h2>
		<ProjectList
			deleteProject={deleteProject}
			selectedProjectId={selectedProjectId}
			selectProject={selectProject}
			projects={projects}
		/>
	</Paper>
);

Sidebar.propTypes = {
	deleteProject: PropTypes.func.isRequired,
	openModal: PropTypes.func.isRequired,
	projects: ProjectsDef,
	selectedProjectId: PropTypes.string,
	selectProject: PropTypes.func.isRequired,
	updateTempData: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
	projects: [],
	selectedProjectId: null,
};

export default Sidebar;
