import React from 'react';
import PropTypes from 'prop-types';
import path from 'path';

import { children } from '../../constants/propDefinitions';
import './FolderNameDisplay.scss';

const seperator = path.sep;
const pathSep = new RegExp(seperator, 'g');

const FolderNameDisplay = ({
	children,
	action,
	className = '',
	folder = '',
}) => {
	const pathSplit = (folder || children).split(pathSep);

	return (
		<div className={`folder-name-display ${className}`} direction="rtl">
			<span>{pathSplit.slice(0, -1).join(seperator)}</span>
			<span className="folder-name-display__divider">{seperator}</span>
			<span className="folder-name-display__last-part">
				{pathSplit.slice(-1).join('')}
			</span>
			{action && <span className="folder-name-display__actiont">{action}</span>}
		</div>
	);
};

FolderNameDisplay.propTypes = {
	action: children,
	children: children.isRequired,
	folder: children,
	className: PropTypes.string,
};

FolderNameDisplay.defaultProps = {
	action: null,
	className: '',
	folder: null,
};

export default FolderNameDisplay;
