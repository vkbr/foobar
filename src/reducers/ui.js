const OPEN_CREATE_PROJECT = 'UI/PROJECT/CREATE';
const UPDATE_PROJECT_TEMP_DATA = 'UI/PROJECT/UPDATE_TEMP_DATA';

export const MODES = {
	NORMAL: 'UI/MODE/NORMAL',
	CREATE: 'UI/MODE/CREATE',
};

const initialState = {
	mode: MODES.NORMAL,
	tempCreateProjectData: {
		pwd: '',
		projectName: '',
	}
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_PROJECT_TEMP_DATA:
			const extraPolatedData = {};
			const pwd = action.data.pwd;

			if (pwd !== undefined) {
				const folderName = pwd[0].split('\/').slice(-1)[0];
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
				}
			};
		case OPEN_CREATE_PROJECT:
			return {
				...state,
				mode: MODES.CREATE,
			};
		default:
			return state;
	}
}

export default reducer;

export const openCreateProject = () => ({
	type: OPEN_CREATE_PROJECT,
});

export const updateTempProjectData = (data) => ({
	data,
	type: UPDATE_PROJECT_TEMP_DATA,
});