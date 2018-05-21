import React from 'react';
import { remote } from 'electron';
import fs from 'fs';

import Drawing from '../utils/Drawing';
import './FileLoader.scss';

const FileLoader = () => (
	<div className="file-loader">
		<span>File</span>
		<button
			onClick={() => {
				const selectedPath = remote.dialog.showOpenDialog({ properties: ['openFile'] });
				
				if (selectedPath === undefined) return;

				new Drawing(selectedPath);
			}}
		>
			Open
		</button>
	</div>
);

export default FileLoader;