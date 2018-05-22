import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import { MODES } from '../reducers/ui';
import ProjectList from './ProjectList';

import './Sidebar.scss';

const Sidebar = ({ toggleContentMode, uiMode }) => (
	<div className="sidebar">
		<h2 className="sidebar-heading">
			<span className="sidebar-heading__text">Projects</span>
			{console.log(uiMode, MODES.CREATE)}
			<IconButton
				className="add-project"
				onClick={() => toggleContentMode()}
				style={
					uiMode === MODES.CREATE ?
						{transform: 'rotate(45deg)'} :
						null
				}
			>
				<AddIcon />
			</IconButton>
		</h2>
		<ProjectList />
	</div>
);

export default Sidebar;
