import { PROJECT_STORE_KEY } from '../constants/keys';

let store;
let timeout;

function onData(afterTimeout) {
	if (!afterTimeout) {
		clearTimeout(timeout);
		timeout = setTimeout(() => onData(true), 70);
		return;
	}

	const { projects } = store.getState();
	const { tasksById } = projects;

	let allProjects = projects.allIds.map(id => projects.byId[id]);

	allProjects = allProjects.map(project => ({
		...project,
		tasks: (project.tasks || []).map(taskId => tasksById[taskId]),
	}));

	localStorage.setItem(PROJECT_STORE_KEY, JSON.stringify(allProjects));
}

function restoreData() { }

export default {
	subscribe(source) {
		store = source;

		restoreData();

		store.subscribe(onData);
	},
};
