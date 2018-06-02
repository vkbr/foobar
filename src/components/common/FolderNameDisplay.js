import React from 'react';
import path from 'path';

const seperator = path.sep;
const pathSep = new RegExp(seperator, 'g');

import './FolderNameDisplay.scss';

const FolderNameDisplay = ({ children, action, className = '', folder = '' }) => {
	const pathSplit = (folder || children).split(pathSep);

	return (
		<div className={`folder-name-display ${className}`} direction="rtl">
			<span>{pathSplit.slice(0, -1).join(seperator)}</span>
			<span className="folder-name-display__divider">{seperator}</span>
			<span className="folder-name-display__last-part">{pathSplit.slice(-1).join('')}</span>
			{action && <span className="folder-name-display__actiont">{action}</span>}
		</div>
	);
};

export default FolderNameDisplay;
