import React from 'react';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';

import CreateTaskModal from './CreateTaskModal';
import './Modals.scss';

const modalContainers = {
	CREATE_TASK: CreateTaskModal,
};

const Modal = ({ isOpen, contentKey, modalProps }) => {
	const Content = modalContainers[contentKey];

	if (Content === undefined) {
		return null;
	}

	return (
		<Dialog open={isOpen}>
			<Content {...modalProps} />
		</Dialog>
	);
};

const mapStateToProps = state => state.modal;

export default connect(mapStateToProps)(Modal);
