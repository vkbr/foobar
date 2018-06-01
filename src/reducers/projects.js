import { normalize } from 'normalizr';
import uuidv4 from 'uuid/v4';
import path from 'path';
import fs from '../utils/fs-promise';

import { PROJECT_STORE_KEY } from '../constants/keys';
import { project as projectSchema } from '../schemas/project';
import { stat } from 'fs';

const UPDATE_PROJECT_TEMP_DATA = 'PRO/PROJECT/UPDATE_TEMP_DATA';
const ADD_PROJECT = 'PRO/PROJECT/ADD';
const UPDATE_PROJECT = 'PRO/PROJECT/UPDATE';
const UPDATE_SELECTED_PROJECT = 'PRO/PROJECT/UPDATE_SELECT';

const allProjectsSaved = localStorage.getItem(PROJECT_STORE_KEY) || '[]';
let projectsJson = [];

try {
	projectsJson = JSON.parse(allProjectsSaved);
} catch (e) {}

const hasProject = projectsJson.length > 0;
const normalizedProject = normalize(projectsJson, [projectSchema]);

const initialState = {
	allIds: normalizedProject.result,
	byId: normalizedProject.entities.project || {},
	tasks: normalizedProject.entities.tasks || {},
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
				tasks: {
					...state.tasks,
					...normalizedProject.entities.task,
				},
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

export const addProject = data => {
	const project = {
		id: uuidv4(),
		...data,
	};

	return {
		type: ADD_PROJECT,
		project,
	};
};

export const updateProject = project => ({
	project,
	type: UPDATE_PROJECT,
});

export const selectProject = projectId => ({
	projectId,
	type: UPDATE_SELECTED_PROJECT,
});
