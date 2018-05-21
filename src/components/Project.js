import React from 'react';

import ContentWrapper from './ContentWrapper';
import './Project.scss';

const Project = () => (
	<ContentWrapper className="project" heading="Hello!">
		<span>File</span>
		<button>Open</button>
	</ContentWrapper>
);

export default Project;