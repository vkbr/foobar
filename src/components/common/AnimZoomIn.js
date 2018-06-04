import React, { PureComponent } from 'react';
import Transition from 'react-transition-group/Transition';

const duration = 150;

const defaultStyle = {
	opacity: 0,
	transform: 'scale3d(0.8,0.8,0.8)',
	transition: `all ${duration}ms ease-out`,
};

const stateStyles = {
	entering: {
		opacity: 0,
		transform: 'scale3d(0.8,0.8,0.8)',
	},
	entered: {
		opacity: 1,
		transform: 'scale3d(1,1,1)',
	},
};

class AnimZoomIn extends PureComponent {
	state = {
		in: false,
	};
	render() {
		const { style, children, ...restProp } = this.props;

		return (
			<Transition in={this.state.in} timeout={{ enter: duration }}>
				{state => (
					<div
						ref={el => el && this.setState({ in: true })}
						style={{ ...defaultStyle, ...stateStyles[state], ...style }}
						{...restProp}
					>
						{children}
					</div>
				)}
			</Transition>
		);
	}
}

export default AnimZoomIn;
