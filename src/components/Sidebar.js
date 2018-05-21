import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import ProjectList from './ProjectList';

import './Sidebar.scss';

const Sidebar = ({ openCreateProject }) => (
	<div className="sidebar">
		<h2 className="sidebar-heading">
			<span className="sidebar-heading__text">Projects</span>
			<IconButton onClick={() => openCreateProject()}>
				<AddIcon />
			</IconButton>
		</h2>
		<ProjectList />
	</div>
);

export default Sidebar;
