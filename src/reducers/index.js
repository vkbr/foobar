import { combineReducers } from 'redux';

import modal from './modal';
import projects from './projects';
import ui from './ui';

export default combineReducers({
	modal,
	projects,
	ui,
});
