import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

const styles = {
	textField: {
		width: '100%',
	},
};

class CreateTaskModal extends Component {
	state = {
		name: '',
		cmd: '',
	};
	updateField = fieldName => e =>
		this.setState({
			[fieldName]: e.target.value,
		});
	render() {
		const { projectId, closeModal, createProjectTask } = this.props;

		return (
			<Fragment>
				<DialogTitle>Add Task</DialogTitle>
				<DialogContent>
					<TextField
						onChange={this.updateField('name')}
						style={styles.textField}
						value={this.state.name}
						label="Give task a name"
					/>
					<TextField
						onChange={this.updateField('cmd')}
						style={{ ...styles.textField, marginTop: 20 }}
						value={this.state.cmd}
						label="Shell command"
					/>
				</DialogContent>
				<DialogActions>
					<label htmlFor="create-another">
						<Checkbox id="create-another" />
						Create another
					</label>
					<Button style={{ marginLeft: 20 }} onClick={() => closeModal()}>
						Cancel
					</Button>
					<Button
						color="primary"
						variant="raised"
						onClick={() => createProjectTask(projectId, { ...this.state })}
					>
						Create
					</Button>
				</DialogActions>
			</Fragment>
		);
	}
}

CreateTaskModal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	createProjectTask: PropTypes.func.isRequired,
	projectId: PropTypes.string.isRequired,
};

export default CreateTaskModal;
