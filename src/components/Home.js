import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';

function Home({nameValue, counterValue}) {    
    return (
        <>
            <Header title="Home" />
            <div>
                <span className="text-muted font-italic mr-2">Counter:</span> 
                <span className="badge badge-pill badge-success">{counterValue}</span>
                <Link to={'/counter'} className="btn btn-link">Change</Link>
            </div>
            <div>
                <span className="text-muted font-italic mr-2">Last Name:</span>
                <span className="badge badge-pill badge-success">{nameValue || "nothing"}</span>
                <Link to={'/name'} className="btn btn-link">Change</Link>
            </div>
        </>
    );
}

Home.propTypes = {
    nameValue: PropTypes.string,
    counterValue: PropTypes.number
}

const mapStateToProps = state => {
    return {
        nameValue: state.name.value,
        counterValue: state.counter.value,
    }
}

export default connect(mapStateToProps)(Home);