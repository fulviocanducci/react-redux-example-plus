import React from 'react';
import { connect } from 'react-redux';
import AppRouter from './AppRouter';


function App() {  
  return (
    <AppRouter />
  );
}

export default connect()(App);