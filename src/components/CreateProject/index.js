import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

const CreateProject = ({ addProject, closeModal, tempData, updateTempData }) => (
	<Fragment>
		<DialogContent>
			<TextField
				label="Give project a name"
				style={{maxWidth: '100%', width: 200}}
				value={tempData.projectName}
				onChange={e => updateTempData({ projectName: e.target.value })}
			/>
		</DialogContent>
		<DialogActions>
			<Button
				onClick={(e) => {
					closeModal();
					addProject({
						pwd: tempData.pwd,
						name: tempData.projectName,
						tasks: [],
					});
				}}
			>Create Project</Button>
		</DialogActions>
	</Fragment>
);

export default CreateProject;