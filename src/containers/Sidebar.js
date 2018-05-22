import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleContentMode } from '../reducers/ui';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
	uiMode: state.ui.mode,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	toggleContentMode
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
