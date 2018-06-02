import { combineReducers } from 'redux';

import modal from './modal';
import projects from './projects';
import snackbar from './snackbar';
import ui from './ui';

export default combineReducers({
	modal,
	projects,
	snackbar,
	ui,
});
