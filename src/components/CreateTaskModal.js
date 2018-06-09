import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const CreateTaskModal = () => (
	<Fragment>
		<DialogTitle>Add Task</DialogTitle>
		<DialogContent>
			<div className="create-task-modal">Moooodal!!</div>
		</DialogContent>
		<DialogActions>
			<label htmlFor="create-another">
				<Checkbox id="create-another" />
				Create another
			</label>
			<Button>Cancel</Button>
			<Button color="primary" variant="raised">
				Create
			</Button>
		</DialogActions>
	</Fragment>
);

export default CreateTaskModal;
