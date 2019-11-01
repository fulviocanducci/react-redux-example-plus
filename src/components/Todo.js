import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './Header';
import { ADD_TODO, CHANGE_TODO } from '../constants';
import { guid } from '../utils';
import LinkToHome from './LinkToHome';

function Todo({value, onAddTodo, onChangeTodo}) {       
    const [description, setDescription] = useState('');    
    function onSubmitForm(e) {
        e.preventDefault();
        if (description) {
            const id = guid();
            const done = false;
            onAddTodo({id, description, done});
            setDescription('');        
        }
    }
    function onHandleChangeDone(e, v) {        
        onChangeTodo({...v, done: e.target.checked});
    }
   
    return (
        <>
        <Header title="List of Todos" />        
        <div>
            <form onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="col-10">
                        <div className="form-group">
                            <label htmlFor="inputDescription" className="sr-only">Description</label>
                            <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="form-control" id="inputDescription" placeholder="Description" autoComplete="false" autoFocus/>
                        </div>
                    </div>
                    <div className="col-2">
                        <button type="submit" disabled={!description.length} className="btn btn-primary btn-block">Add</button>
                    </div>
                </div>
            </form>
        </div>        
        <div>            
            <ul className="list-group">
            {value.map((v, i) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={i}>                    
                    <span className="">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" 
                                id={v.id}
                                onChange={e => onHandleChangeDone(e, v)} 
                                defaultChecked={v.done ? true: false} 
                                className="custom-control-input"
                            />   
                            <label className="custom-control-label" htmlFor={v.id}>
                                { v.description }
                            </label>
                        </div>
                    </span>
                </li>
            ))}
            </ul>
        </div>
        <LinkToHome/>
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
        onChangeTodo: (payload) => dispatch({type: CHANGE_TODO, payload}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);