import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconClose from '@material-ui/icons/Close';

import { hideShackbar } from '../reducers/snackbar';

const SnackbarWrapper = ({
	action,
	actionText,
	hideShackbar,
	isOpen,
	message,
}) => (
	<Snackbar
		open={isOpen}
		message={message}
		action={[
			actionText && action &&
				<Button
					key="action"
					color="secondary"
					onClick={() => {
						hideShackbar();
						action()
					}}
				>{actionText}</Button>,
			<IconButton
				color="inherit"
				onClick={hideShackbar}
			><IconClose /></IconButton>
		]}
	/>
);

const mapStateToProps = state => state.snackbar;

const mapDispatchToProps = dispath => bindActionCreators({
	hideShackbar,
}, dispath);

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarWrapper);