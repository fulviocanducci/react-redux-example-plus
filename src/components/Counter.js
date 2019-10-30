import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { INCREMENT, DECREMENT } from '../constants';

import Header from './Header';
import LinkToHome from './LinkToHome';

function Counter({value, onClickAddNumber, onClickRemoveNumber}) {
    return (
        <>
          <Header title="Counter"/>
          <div className="text-center">
              <h1>{value || 0}</h1>
          </div>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-outline-primary btn-block" onClick={onClickAddNumber}>+</button> 
            </div>
            <div className="col-6">
              <button className="btn btn-outline-danger btn-block" onClick={onClickRemoveNumber}>-</button>
            </div>
            <div className="col-12 text-left mt-3">
              <LinkToHome />
            </div>
          </div>
        </>
    );
}

Counter.propTypes = {
  value: PropTypes.number, 
  onClickAddNumber: PropTypes.func, 
  onClickRemoveNumber: PropTypes.func
}

const mapStateToProps = (state) => {    
  return {
    value: state.counter.value
  }
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddNumber: (e) => {
      dispatch({'type': INCREMENT});
    },
    onClickRemoveNumber: (e) => {
      dispatch({'type': DECREMENT})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);