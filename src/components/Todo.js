import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ADD_TODO } from '../constants';
import { guid } from '../utils';

function Todo({value, onAddTodo}) {    
    const [description, setDescription] = useState('');
    function onSubmitForm(e) {
        e.preventDefault();
        const id = guid();
        const done = false;
        onAddTodo({id, description, done});
    }
    return (
        <>
        <div>
            <form onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="col-8">
                        <div className="form-group">
                            <label htmlFor="inputDescription" className="sr-only">Description</label>
                            <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" id="inputDescription" placeholder="Description" autoComplete="false" />
                        </div>
                    </div>
                    <div className="col-4">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <ul className="list-group list-group-flush">
            {value.map((v, i) => (
                <li className="list-group-item list-group-item-primary" key={i}>
                    {v.description}
                </li>
            ))}
            </ul>
        </div>
        </>
    );
}

Todo.propTypes = {
    value: PropTypes.array,
    onAddTodo: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        value: state.todo.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (payload) => dispatch({type: ADD_TODO, payload}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);