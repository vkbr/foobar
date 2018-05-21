// import fs from 'fs';
// import fs from '../utils/fs-promise';
// import os from 'os';
// import path from 'path';

const INIT_PROJECT = 'PRO/INIT';
const PROJECT_PATH = 'project.json';

const allProjectsSaved = localStorage.getItem(PROJECT_PATH) || '[]';
let projects = [];

try {
	projects = JSON.parse(allProjectsSaved);
} catch(e) {}

const initialState = {
	list: projects,
	isLoaded: true,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;

export const initProject = () => async (dispatch) => {
	setTimeout(() => {
		dispatch({
			type: INIT_PROJECT
		});
	}, 2000);
}
