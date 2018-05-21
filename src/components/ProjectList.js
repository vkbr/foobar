import React from 'react';

import './ProjectList.scss';

const ProjectList = () => (
	<div className={"project-list" + ' empty-list'}>
		<div className="no-project-info">No project added yet.</div>
	</div>
);

export default ProjectList;