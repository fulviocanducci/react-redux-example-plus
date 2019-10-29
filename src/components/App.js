import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { INCREMENT } from '../constants';

function App(props) {  
  return (
    <div>
      <Counter number={props.counter} onClickAddNumber={props.onClickAddNumber}/>
    </div>
  );
}

const mapStateToProps = (state) => {    
  return {
    counter: state.counterReducer.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddNumber: (e) => {
      dispatch({'type': INCREMENT});
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);