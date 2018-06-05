import PropTypes from 'prop-types';

export const children = PropTypes.oneOfType([
	PropTypes.node,
	PropTypes.arrayOf(PropTypes.node),
]);

export const project = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	pwd: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.string),
});

export const projects = PropTypes.arrayOf(project);
