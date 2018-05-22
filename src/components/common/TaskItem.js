import React, { PureComponent } from 'react';

import AnimZoomIn from './AnimZoomIn';
import './TaskItem.scss';

class TaskItem extends PureComponent {
	state = {
		isSelected: false,
	};

	handleSelect() {
		if (!this.props.selectable) {
			return false;
		}

		this.setState({
			isSelected: !this.state.isSelected,
		});
	}

	render() {
		const { name, cmd, selectable } = this.props;

		return (
			<AnimZoomIn
				className={`task-item ${this.state.isSelected ? 'selected' : ''}`}
				onClick={() => this.handleSelect()}
			>
				<h3>{name}</h3>
				<div>{cmd}</div>
			</AnimZoomIn>
		)
	}
};

export default TaskItem;
