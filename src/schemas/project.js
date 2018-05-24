import { schema } from 'normalizr';

export const task = new schema.Entity('task');

export const project = new schema.Entity('project', {
	tasks: [task]
});