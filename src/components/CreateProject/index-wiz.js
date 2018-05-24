import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

import ContentWrapper from '../ContentWrapper';
import StepSetup from './StepSetup';
import StepTasks from './StepTasks';
import './CreateProject.scss';

const steps = [
	{label: 'Setup'},
	{label: 'Tasks'},
];

class CreateProject extends Component {
	state = {
		step: 0,
	}
	render() {
		const {
			addProjectTaskSuggestion,
			createProjectFromTempData,
			tempCreateProjectData,
			toggleSuggestedTaskSelection,
			updateTempProjectData,
		} = this.props;
		const { step } = this.state;
		const isLasStep = step === steps.length - 1;

		return (
			<ContentWrapper wrapperClassName="create-project" heading="Create New Project">
				<Paper className="standard-paper">
					<Stepper className="stepper-head" activeStep={this.state.step} style={{ position: 'sticky', top: 0 }}>
						{
							steps.map(step => (
								<Step key={step.label}>
									<StepLabel>{step.label}</StepLabel>
								</Step>
							))
						}
					</Stepper>

					<div className="stepper-content">
						{
							[
								<StepSetup
									tempCreateProjectData={tempCreateProjectData}
									updateTempProjectData={updateTempProjectData}
								/>,
								<StepTasks
									addProjectTaskSuggestion={addProjectTaskSuggestion}
									toggleSuggestedTaskSelection={toggleSuggestedTaskSelection}
									tempCreateProjectData={tempCreateProjectData}
								/>,
							][this.state.step]
						}
					</div>

					<div className="stepper-footer">
						{
							step !== 0 &&
							<Button
								style={{marginRight: 20}}
								onClick={() => this.setState({ step: step - 1 })}
							>Previous</Button>
						}
						<Button
							variant="raised"
							color="primary"
							onClick={() => isLasStep ? createProjectFromTempData(tempCreateProjectData) : this.setState({ step: step + 1 })}
						>{isLasStep ? 'Done' : 'Next'}</Button>
					</div>

				</Paper>
			</ContentWrapper>
		);
	}
}

export default CreateProject;