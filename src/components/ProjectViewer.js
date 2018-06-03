import React from 'react';
import FolderOpen from '@material-ui/icons/FolderOpen';
import ContentWrapper from './common/ContentWrapper';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

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
					onChange={e => {
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
										updateTempProjectData({ pwd });
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
					<TextField/>
				</h3>
			</Paper>
		</ContentWrapper>
	);
};

export default ProjectViewer;
