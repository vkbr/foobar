import React, { Fragment } from 'react';
import { remote } from 'electron';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CreateNewFolder from '@material-ui/icons/CreateNewFolder';

const StepSetup = ({ updateTempProjectData, tempCreateProjectData }) => (
	<Fragment>
		<Input
				placeholder="Select project directory"
				value={tempCreateProjectData.pwd}
				style={{width: '100%'}}
				endAdornment={
					<IconButton
						onClick={() => {
							const pwd = remote.dialog.showOpenDialog({ properties: ['openDirectory'] })
							if (pwd !== undefined) {
								updateTempProjectData({ pwd });
							}
						}}
					>
						<CreateNewFolder />
					</IconButton>
				}
			/>

			{
				tempCreateProjectData.pwd &&
					<TextField
						label="Give project a name"
						value={tempCreateProjectData.projectName}
						style={{marginTop: 20, width: '100%'}}
						onChange={e => updateTempProjectData({ projectName: e.target.value })}
					/>
			}
	</Fragment>
);

export default StepSetup;
