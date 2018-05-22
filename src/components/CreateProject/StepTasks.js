import React, { Fragment } from 'react';

import TaskItem from '../common/TaskItem';

const StepTasks = ({ tempCreateProjectData }) => (
	<Fragment>
		<div className="tasks-container">
			<TaskItem selectable name="npm start" cmd="node server/index.js" />
			{
				!tempCreateProjectData.isFetchingTaskSuggestions && tempCreateProjectData.tasksSuggestion &&
					tempCreateProjectData.tasksSuggestion.map(({ id, name, cmd }) => (
						<TaskItem selectable name={name} cmd={name} key={id}  />
					))
			}
		</div>
	</Fragment>
);

export default StepTasks;
