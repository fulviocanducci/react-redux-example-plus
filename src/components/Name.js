import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CHANGE_NAME } from '../constants';

import Header from './Header';
import LinkToHome from './LinkToHome';

function Name({value, onChangeName}) {
    const [local, setLocal] = useState(value);
    return (
        <>
            <Header title="Name" />
            <div>
                <input className="form-control" type="text" value={local} onChange={e => setLocal(e.target.value)} />
            </div>
            <div className="mt-3">
                <button className="btn btn-outline-primary" onClick={e => onChangeName(local)}>Change</button>
            </div>
            <div>
                <LinkToHome />
            </div>
        </>
    )
}

Name.propTypes = {
    value: PropTypes.string,
    onChangeName: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        value: state.name.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (payload) => dispatch({'type': CHANGE_NAME, payload: payload})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);