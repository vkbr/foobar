import React, { Fragment, PureComponent } from 'react';
import uuidv4 from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import TaskItem from '../common/TaskItem';

const initialState = {
	name: '',
	cmd: '',
};

class StepTasks extends PureComponent {
	state = initialState;
	updateField = fieldName => e => {
		this.setState({
			[fieldName]: e.target.value
		});
	}
	render() {
		const {
			addProjectTaskSuggestion,
			toggleSuggestedTaskSelection,
			tempCreateProjectData,
		} = this.props;

		return (
			<Fragment>
				<div className="tasks-container">
					<div className="new-task-form">
						<TextField
							label="Name"
							style={{width: '100%'}}
							onChange={this.updateField('name')}
							value={this.state.name}
							/>
						<TextField
							label="Command"
							style={{width: '100%', marginTop: 20}}
							onChange={this.updateField('cmd')}
							value={this.state.cmd}
							/>
						<Button
							color="primary"
							style={{ marginTop: 20, float: 'right'}}
							onClick={() => {
								const { name, cmd } = this.state;

								if (cmd === '') {
									return;
								}

								addProjectTaskSuggestion({
									name,
									cmd,
									selected: true,
									id: uuidv4(),
								});
								this.setState(initialState);
							}}
						>Add</Button>
					</div>
					{
						!tempCreateProjectData.isFetchingTaskSuggestions &&
						tempCreateProjectData.tasksSuggestion &&
						tempCreateProjectData.tasksSuggestion.map(({ id, name, cmd, selected }) => (
							<TaskItem
								selectable
								key={id}
								selected={selected}
								name={name}
								cmd={cmd}
								onSelectChange={() => toggleSuggestedTaskSelection(id)}
							/>
						))
					}
				</div>
			</Fragment>
		);
	}
}

export default StepTasks;
