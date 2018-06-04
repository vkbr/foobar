import React from 'react';
import PropTypes from 'prop-types';

import { children } from '../../constants/propDefinitions';
import AnimZoomIn from './AnimZoomIn';
import './ContentWrapper.scss';

const ContentWrapper = ({ heading, children, wrapperClassName }) => (
	<AnimZoomIn className={`content-wrapper ${wrapperClassName}`}>
		{heading && <h1 className="content-heading">{heading}</h1>}
		<div className="content-holder">{children}</div>
	</AnimZoomIn>
);

ContentWrapper.propTypes = {
	children: children.isRequired,
	heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	wrapperClassName: PropTypes.string,
};

ContentWrapper.defaultProps = {
	wrapperClassName: '',
};

export default ContentWrapper;
