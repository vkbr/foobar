import { normalize } from 'normalizr';
import uuidv4 from 'uuid/v4';
import path from 'path';
import fs from '../utils/fs-promise';

import { project } from '../schemas/project';
import { stat } from 'fs';

const INIT_PROJECT = 'PRO/INIT';
const UPDATE_PROJECT_TEMP_DATA = 'PRO/PROJECT/UPDATE_TEMP_DATA';
const UPDATE_TASK_SUGGESTION = 'PRO/PROJECT/UPDATE_TASK_SUGG';
const UPDATE_TASK_SUGGESTION_SELECTION = 'PRO/PROJECT/UPDATE_TASK_SUGG_SEL';
const ADD_PROJECT = 'PRO/PROJECT/ADD';
const FETCH_TASK_SUGGESTION = 'PRO/PROJECT/FETCH_TASK_SUGG';
const PROJECT_PATH = 'project.json';

const allProjectsSaved = localStorage.getItem(PROJECT_PATH) || '[]';
let projectsJson = [];

try {
	projectsJson = JSON.parse(allProjectsSaved);
} catch (e) {}

const normalizedProject = normalize(projectsJson, [project]);

const initialState = {
	allIds: normalizedProject.result,
	byId: normalizedProject.entities.project || {},
	tasks: normalizedProject.entities.tasks || {},
	isLoaded: true,
	selected: null,
	tempData: {
		pwd: '',
		projectName: '',
		isFetchingTaskSuggestions: false,
	},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PROJECT: {
			const normalizedProject = normalize(action.project, project);
			return {
				...state,
				allIds: state.allIds.concat(normalizedProject.result),
				byId: {
					...state.byId,
					...normalizedProject.entities.project,
				},
				tasks: {
					...state.tasks,
					...normalizedProject.entities.task,
				}
			};
		}
		case UPDATE_PROJECT_TEMP_DATA:
			return {
				...state,
				tempData: {
					...state.tempData,
					...action.data,
				}
			};
		// case UPDATE_TASK_SUGGESTION_SELECTION: {
		// 	const { tempData } = state;
		// 	return {
		// 		...state,
		// 		tempData: {
		// 			...tempData,
		// 			tasksSuggestion: tempData
		// 				.tasksSuggestion
		// 				.map(task => task.id === action.taskId ?
		// 					{...task, selected: !task.selected} :
		// 					task)
		// 		}
		// 	};
		// }
		// case FETCH_TASK_SUGGESTION:
		// 	return {
		// 		...state,
		// 		tempData: {
		// 			...state.tempData,
		// 			tasksSuggestion: [],
		// 			isFetchingTaskSuggestions: true,
		// 		},
		// 	};
		// case UPDATE_TASK_SUGGESTION:
		// 	return {
		// 		...state,
		// 		tempData: {
		// 			...state.tempData,
		// 			tasksSuggestion: [
		// 				...action.tasks,
		// 				...state.tempData.tasksSuggestion
		// 			],
		// 			isFetchingTaskSuggestions: false,
		// 		},
		// 	};
		// case UPDATE_PROJECT_TEMP_DATA:
		// 	const extraPolatedData = {};
		// 	const pwd = action.data.pwd;

		// 	if (pwd !== undefined) {
		// 		const folderName = pwd[0].split('/').slice(-1)[0];
		// 		extraPolatedData.projectName = folderName
		// 			.replace(/[^a-zA-Z\d]+/g, ' ')
		// 			.replace(/^[a-zA-Z]/, $1 => $1.toUpperCase());
		// 	}

		// 	return {
		// 		...state,
		// 		tempData: {
		// 			...state.tempData,
		// 			...action.data,
		// 			...extraPolatedData,
		// 		},
		// 	};
		default:
			return state;
	}
}

export default reducer;

export const getAllProjects = ({ projects: { allIds, byId }}) =>
	allIds.map(id => byId[id]);

// export const updateTempProjectData = data => async dispatch => {
// 	dispatch({
// 		data,
// 		type: UPDATE_PROJECT_TEMP_DATA,
// 	});
// 	dispatch({
// 		type: FETCH_TASK_SUGGESTION,
// 	});

// 	const { pwd } = data;
// 	if (pwd !== undefined) {
// 		try {
// 			const packagePath = path.join(pwd[0], 'package.json');
// 			const packageContent = await fs.readFile(packagePath, 'utf8');

// 			const { scripts } = JSON.parse(packageContent);

// 			if (scripts) {
// 				const tasks = Object.keys(scripts).reduce(
// 					(prev, taskName) => [
// 						...prev,
// 						{
// 							id: uuidv4(),
// 							name: taskName,
// 							cmd: scripts[taskName],
// 							selected: false,
// 						},
// 					],
// 					[]
// 				);

// 				dispatch({
// 					type: UPDATE_TASK_SUGGESTION,
// 					tasks,
// 				});
// 			}
// 		} catch (e) {
// 			console.error('[FATAL]', e);
// 		}
// 	}
// };

// export const addProjectTaskSuggestion = task => ({
// 	type: UPDATE_TASK_SUGGESTION,
// 	tasks: [task],
// });

// export const toggleSuggestedTaskSelection = taskId => ({
// 	type: UPDATE_TASK_SUGGESTION_SELECTION,
// 	taskId
// });

export const updateTempData = data => ({
	type: UPDATE_PROJECT_TEMP_DATA,
	data,
});

export const addProject = (data) => {
	const project = {
		id: uuidv4(),
		...data,
	};

	return {
		type: ADD_PROJECT,
		project,
	};
};
