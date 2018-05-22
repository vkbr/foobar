const TOGGLE_CONTENT_MODE = 'UI/MODE/TOGGLE';

export const MODES = {
	NORMAL: 'UI/MODE/NORMAL',
	CREATE: 'UI/MODE/CREATE',
};

const initialState = {
	mode: MODES.NORMAL,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_CONTENT_MODE:
			return {
				...state,
				mode: state.mode === MODES.NORMAL ? MODES.CREATE : MODES.NORMAL,
			};
		default:
			return state;
	}
}

export default reducer;

export const toggleContentMode = () => ({
	type: TOGGLE_CONTENT_MODE,
});
