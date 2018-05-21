import { combineReducers } from 'redux';

import projects from './projects';
import ui from './ui';

export default combineReducers({
	projects,
	ui,
});
