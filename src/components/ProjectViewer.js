import React from 'react';
import PropTypes from 'prop-types';
import { remote } from 'electron';
import FolderOpen from '@material-ui/icons/FolderOpen';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

import { project as ProjectDefinition } from '../constants/propDefinitions';
import ContentWrapper from './common/ContentWrapper';
import FolderNameDisplay from './common/FolderNameDisplay';
import './ProjectViewer.scss';

const ProjectViewer = ({ selectedProject, updateProject }) => {
	if (!selectedProject) {
		return <div>Loading...</div>;
	}

	return (
		<ContentWrapper
			heading={
				<input
					className="project-editable-name"
					value={selectedProject.name}
					onChange={(e) => {
						updateProject({
							...selectedProject,
							name: e.target.value,
						});
					}}
				/>
			}
		>
			<Paper className="standard-paper">
				<div>
					<FolderNameDisplay
						action={
							<IconButton
								onClick={() => {
									const pwd = remote.dialog.showOpenDialog({
										properties: ['openDirectory'],
									});
									if (pwd !== undefined) {
										updateProject({
											...selectedProject,
											pwd: pwd[0],
										});
									}
								}}
							>
								<FolderOpen />
							</IconButton>
						}
					>
						{selectedProject.pwd}
					</FolderNameDisplay>
				</div>
				<h3 className="project-task-headding">
					<span className="project-task-headding__text">Tasks</span>
					<Input
						endAdornment={
							<SearchIcon
								style={{ color: '#ccc' }}
							/>
						}
					/>
				</h3>
			</Paper>
		</ContentWrapper>
	);
};

ProjectViewer.propTypes = {
	selectedProject: ProjectDefinition,
	updateProject: PropTypes.func.isRequired,
};

ProjectViewer.defaultProps = {
	selectedProject: null,
};

export default ProjectViewer;
