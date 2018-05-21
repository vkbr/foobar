import React from 'react';
import Paper from '@material-ui/core/Paper';

import './ContentWrapper.scss';

const ContentWrapper = ({ heading, children, wrapperClassName = '' }) => (
	<div className={`content-wrapper ${wrapperClassName}`}>
		{heading && <h1 className="content-heading">{heading}</h1>}
		<div className="content-holder">
			{children}
		</div>
	</div>
);

export default ContentWrapper;