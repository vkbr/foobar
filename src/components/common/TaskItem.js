import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AnimZoomIn from './AnimZoomIn';
import './TaskItem.scss';

class TaskItem extends PureComponent {
	handleSelect() {
		const { onSelectChange } = this.props;

		if (!this.props.selectable) {
			return false;
		}

		if (typeof onSelectChange === 'function') onSelectChange();
	}

	render() {
		const { name, cmd } = this.props;

		return (
			<AnimZoomIn
				className="task-item-anim"
				onClick={() => this.handleSelect()}
			>
				<div className={`task-item ${this.props.selected ? 'selected' : ''}`}>
					<h3>{name}</h3>
					<div>{cmd}</div>
				</div>
			</AnimZoomIn>
		);
	}
}

TaskItem.propTypes = {
	cmd: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onSelectChange: PropTypes.func,
	selectable: PropTypes.bool,
	selected: PropTypes.bool,
};

TaskItem.defaultProps = {
	onSelectChange: null,
	selectable: false,
	selected: false,
};

export default TaskItem;
