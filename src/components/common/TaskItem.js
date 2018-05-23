import React, { PureComponent } from 'react';

import AnimZoomIn from './AnimZoomIn';
import './TaskItem.scss';

class TaskItem extends PureComponent {

	handleSelect() {
		const {
			onSelectChange,
		} = this.props;

		if (!this.props.selectable) {
			return false;
		}

		onSelectChange && onSelectChange();
	}

	render() {
		const { name, cmd, selectable } = this.props;

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
		)
	}
};

export default TaskItem;
