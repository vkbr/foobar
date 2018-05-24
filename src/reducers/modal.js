const SHOW_MODAL = 'MOD/SHOW';
const HIDE_MODAL = 'MOD/HIDE';

const initialState = {
	isOpen: false,
	contentKey: null,
	modalProps: {},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				...state,
				isOpen: true,
				contentKey: action.contentKey,
				modalProps: action.modalProps,
			};
		case HIDE_MODAL:
			return {
				...state,
				isOpen: false,
			};
		default:
			return state;
	}
}

export default reducer;

export const openModal = (contentKey, modalProps) => ({
	type: SHOW_MODAL,
	contentKey,
	modalProps,
});

export const closeModal = () => ({
	type: HIDE_MODAL,
});
