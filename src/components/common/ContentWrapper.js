import React from 'react';
import Paper from '@material-ui/core/Paper';

import AnimZoomIn from './AnimZoomIn';
import './ContentWrapper.scss';

const ContentWrapper = ({ heading, children, wrapperClassName = '' }) => (
	<AnimZoomIn className={`content-wrapper ${wrapperClassName}`}>
		{heading && <h1 className="content-heading">{heading}</h1>}
		<div className="content-holder">
			{children}
		</div>
	</AnimZoomIn>
);

export default ContentWrapper;