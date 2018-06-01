import React from 'react';
import path from 'path';

const seperator = path.sep;
const pathSep = new RegExp(seperator, 'g');

const FolderNameDisplay = ({ children, className = '', folder = '' }) => {
	const pathSplit = (folder || children).split(pathSep);

	return (
		<div className={`folder-name-display ${className}`}>
			<span>{pathSplit.slice(0, -1).join(seperator)}</span>
			<span>{seperator}</span>
			<span>{pathSplit.slice(-1).join('')}</span>
		</div>
	);
};

export default FolderNameDisplay;
