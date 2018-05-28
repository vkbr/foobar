import React from 'react';
import ContentWrapper from './common/ContentWrapper';

import './ProjectViewer.scss';

const ProjectViewer = ({ selectedProject, updateProject }) => {
	if (!selectedProject) {
		return <div>Loading...</div>;
	}

	return (
		<ContentWrapper
			heading={
				<input
					className="project-editable-name"
					value={selectedProject.name}
					onChange={e => {
						updateProject({
							...selectedProject,
							name: e.target.value,
						});
					}}
				/>
			}
		>
			Hallo
		</ContentWrapper>
	)
};

export default ProjectViewer;
