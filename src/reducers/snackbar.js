const SHOW_SNACKBAR = 'SKB/SHOW';
const HIDE_SNACKBAR = 'SKB/HIDE';
const SNACK_DURATION = 5000;

const initialState = {
	isOpen: false,
	message: null,
	actionText: null,
	action: null,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_SNACKBAR: {
			const { message, action: onActionClick, actionText } = action;

			return {
				...state,
				actionText,
				message,
				action: onActionClick,
				isOpen: true,
			};
		}
		case HIDE_SNACKBAR:
			return {
				...state,
				isOpen: false,
				action: null,
			};
		default:
			return state;
	}
}

export default reducer;

let timeout;
export const showShackbar = ({ message, actionText, action, duration }) => (dispatch) => {
	dispatch({
		action,
		actionText,
		message,
		type: SHOW_SNACKBAR,
	});

	clearTimeout(timeout);

	timeout = setTimeout(() => {
		dispatch({
			type: HIDE_SNACKBAR,
		});
	}, duration || SNACK_DURATION);
};

export const hideShackbar = () => ({
	type: HIDE_SNACKBAR,
});
