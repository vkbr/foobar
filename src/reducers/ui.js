const OPEN_CREATE_PROJECT = 'UI/PROJECT/CREATE';

export const MODES = {
	NORMAL: 'UI/MODE/NORMAL',
	CREATE: 'UI/MODE/CREATE',
};

const initialState = {
	mode: MODES.NORMAL,
};

function reducer(state = initialState, action) {
	switch (action.type) {
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
