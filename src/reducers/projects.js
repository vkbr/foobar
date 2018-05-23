// import fs from 'fs';
import uuidv4 from 'uuid/v4';
import path from 'path';
// import os from 'os';
import fs from '../utils/fs-promise';

const INIT_PROJECT = 'PRO/INIT';
const UPDATE_PROJECT_TEMP_DATA = 'PRO/PROJECT/UPDATE_TEMP_DATA';
const UPDATE_TASK_SUGGESTION = 'PRO/PROJECT/UPDATE_TASK_SUGG';
const UPDATE_TASK_SUGGESTION_SELECTION = 'PRO/PROJECT/UPDATE_TASK_SUGG_SEL';
const FETCH_TASK_SUGGESTION = 'PRO/PROJECT/FETCH_TASK_SUGG';
const PROJECT_PATH = 'project.json';

const allProjectsSaved = localStorage.getItem(PROJECT_PATH) || '[]';
let projects = [];

try {
	projects = JSON.parse(allProjectsSaved);
} catch (e) {}

const initialState = {
	list: projects,
	isLoaded: true,
	tempCreateProjectData: {
		pwd: '',
		projectName: '',
		isFetchingTaskSuggestions: false,
		tasksSuggestion: [],
	},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_TASK_SUGGESTION_SELECTION: {
			const { tempCreateProjectData } = state;
			return {
				...state,
				tempCreateProjectData: {
					...tempCreateProjectData,
					tasksSuggestion: tempCreateProjectData
						.tasksSuggestion
						.map(task => task.id === action.taskId ?
							{...task, selected: !task.selected} :
							task)
				}
			};
		}
		case FETCH_TASK_SUGGESTION:
			return {
				...state,
				tempCreateProjectData: {
					...state.tempCreateProjectData,
					tasksSuggestion: [],
					isFetchingTaskSuggestions: true,
				},
			};
		case UPDATE_TASK_SUGGESTION:
			return {
				...state,
				tempCreateProjectData: {
					...state.tempCreateProjectData,
					tasksSuggestion: [
						...action.tasks,
						...state.tempCreateProjectData.tasksSuggestion
					],
					isFetchingTaskSuggestions: false,
				},
			};
		case UPDATE_PROJECT_TEMP_DATA:
			const extraPolatedData = {};
			const pwd = action.data.pwd;

			if (pwd !== undefined) {
				const folderName = pwd[0].split('/').slice(-1)[0];
				extraPolatedData.projectName = folderName
					.replace(/[^a-zA-Z\d]+/g, ' ')
					.replace(/^[a-zA-Z]/, $1 => $1.toUpperCase());
			}

			return {
				...state,
				tempCreateProjectData: {
					...state.tempCreateProjectData,
					...action.data,
					...extraPolatedData,
				},
			};
		default:
			return state;
	}
}

export default reducer;

export const initProject = () => async dispatch => {
	setTimeout(() => {
		dispatch({
			type: INIT_PROJECT,
		});
	}, 2000);
};

export const updateTempProjectData = data => async dispatch => {
	dispatch({
		data,
		type: UPDATE_PROJECT_TEMP_DATA,
	});
	dispatch({
		type: FETCH_TASK_SUGGESTION,
	});

	const { pwd } = data;
	if (pwd !== undefined) {
		try {
			const packagePath = path.join(pwd[0], 'package.json');
			const packageContent = await fs.readFile(packagePath, 'utf8');

			const { scripts } = JSON.parse(packageContent);

			if (scripts) {
				const tasks = Object.keys(scripts).reduce(
					(prev, taskName) => [
						...prev,
						{
							id: uuidv4(),
							name: taskName,
							cmd: scripts[taskName],
							selected: false,
						},
					],
					[]
				);

				dispatch({
					type: UPDATE_TASK_SUGGESTION,
					tasks,
				});
			}
		} catch (e) {
			console.error('[FATAL]', e);
		}
	}
};

export const addProjectTaskSuggestion = task => ({
	type: UPDATE_TASK_SUGGESTION,
	tasks: [task],
});

export const toggleSuggestedTaskSelection = taskId => ({
	type: UPDATE_TASK_SUGGESTION_SELECTION,
	taskId
});
