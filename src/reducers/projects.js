import { normalize } from 'normalizr';
import path from 'path';
import uuidv4 from 'uuid/v4';

import { PROJECT_STORE_KEY } from '../constants/keys';
import { project as projectSchema } from '../schemas/project';
import { showShackbar } from './snackbar';
import fs from '../utils/fs-promise';

const UPDATE_PROJECT_TEMP_DATA = 'PRO/PROJECT/UPDATE_TEMP_DATA';
const ADD_PROJECT = 'PRO/PROJECT/ADD';
const UPDATE_PROJECT = 'PRO/PROJECT/UPDATE';
const DELETE_PROJECT = 'PRO/PROJECT/DELETE';
const UPDATE_SELECTED_PROJECT = 'PRO/PROJECT/UPDATE_SELECT';
const ADD_PROJECT_TASK = 'PRO/PROJECT/CREATE_TASK';

const allProjectsSaved = localStorage.getItem(PROJECT_STORE_KEY) || '[]';
let projectsJson = [];

try {
	projectsJson = JSON.parse(allProjectsSaved);
} catch (e) { }

const hasProject = projectsJson.length > 0;
const normalizedProject = normalize(projectsJson, [projectSchema]);

const initialState = {
	allIds: normalizedProject.result,
	byId: normalizedProject.entities.project || {},
	tasksById: normalizedProject.entities.task || {},
	isLoaded: true,
	selectedId: hasProject ? projectsJson[0].id : null,
	tempData: {
		pwd: '',
		projectName: '',
		isFetchingTaskSuggestions: false,
	},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_PROJECT: {
			const normalizedProject = normalize(action.project, projectSchema);
			return {
				...state,
				allIds: state.allIds.concat(normalizedProject.result),
				selectedId: action.project.id,
				byId: {
					...state.byId,
					...normalizedProject.entities.project,
				},
				tasksById: {
					...state.tasksById,
					...normalizedProject.entities.task,
				},
			};
		}
		case ADD_PROJECT_TASK: {
			const { projectId, task } = action;
			const project = state.byId[projectId];
			const nextTask = { ...task, id: uuidv4() };

			// console.log(
			// 	[...project.tasks, nextTask.id],
			// 	JSON.parse(JSON.stringify(nextTask))
			// );

			return {
				...state,
				byId: {
					...state.byId,
					[projectId]: {
						...project,
						tasks: [...project.tasks, nextTask.id],
					},
				},
				tasksById: {
					...state.tasksById,
					[nextTask.id]: nextTask,
				},
			};
		}
		case DELETE_PROJECT: {
			const { projectId } = action;
			const { allIds, byId } = state;
			let { selectedId } = state;
			const selectedIdAt = allIds.indexOf(selectedId);
			const projectCount = allIds.length;

			if (selectedId === projectId) {
				if (allIds.length < 2) {
					selectedId = null;
				} else if (selectedIdAt === projectCount - 1) {
					selectedId = allIds[projectCount - 2];
				} else {
					selectedId = allIds[selectedIdAt + 1];
				}
			}

			return {
				...state,
				selectedId,
				byId: {
					...byId,
					[projectId]: undefined,
				},
				allIds: allIds.filter(id => id !== projectId),
			};
		}
		case UPDATE_PROJECT: {
			const { project } = action;

			return {
				...state,
				byId: {
					...state.byId,
					[project.id]: project,
				},
			};
		}
		case UPDATE_PROJECT_TEMP_DATA:
			return {
				...state,
				tempData: {
					...state.tempData,
					...action.data,
				},
			};
		case UPDATE_SELECTED_PROJECT:
			return {
				...state,
				selectedId: action.projectId,
			};
		default:
			return state;
	}
}

export default reducer;

export const getAllProjects = ({ projects: { allIds, byId } }) =>
	allIds.map(id => byId[id]);

export const updateTempData = data => ({
	type: UPDATE_PROJECT_TEMP_DATA,
	data,
});

export const addProject = data => (dispatch) => {
	const projectId = uuidv4();
	const project = {
		id: projectId,
		...data,
	};

	console.log("TASK for", data.pwd);
	fs.readFile(path.join(data.pwd, 'package.json'), 'utf8')
		.then((data) => {
			const { scripts } = JSON.parse(data);

			if (scripts !== undefined) {
				Object
					.keys(scripts)
					.forEach(taskName => dispatch({
						projectId,
						task: {
							name: taskName,
							cmd: scripts[taskName],
						},
						type: ADD_PROJECT_TASK,
					}));
			}
		});

	dispatch({
		type: ADD_PROJECT,
		project,
	});
};



export const updateProject = project => ({
	project,
	type: UPDATE_PROJECT,
});

export const deleteProject = projectId => (dispatch, getState) => {
	const projectToDelete = getState().projects.byId[projectId];

	dispatch({
		projectId,
		type: DELETE_PROJECT,
	});

	dispatch(
		showShackbar({
			message: 'Deleted',
			actionText: 'UNDO',
			action: () => {
				dispatch(addProject(projectToDelete));
			},
		})
	);
};

export const selectProject = projectId => ({
	projectId,
	type: UPDATE_SELECTED_PROJECT,
});

export const createProjectTask = (projectId, task) => ({
	projectId,
	task,
	type: ADD_PROJECT_TASK,
});
