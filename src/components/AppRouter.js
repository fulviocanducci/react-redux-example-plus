import React from 'react';
import Home from './Home';
import Counter from './Counter';
import Name from './Name';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const router = [{
    linkTo: '/',
    component: Home, 
    name: 'Home'
}, {
    linkTo: '/counter',
    component: Counter,
    name: 'Counter'
}, {
    linkTo: '/name',
    component: Name,
    name: 'Name'
}]

function AppRouter() {     
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">                
                <Link className="navbar-brand" to={'/'}>System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">                        
                        {router.map((item, key) => (
                            <li key={key} className="nav-item active">
                                <Link className="nav-link" key={key} to={item.linkTo}>{item.name}</Link>
                            </li>
                        ))}	  
                    </ul>
                </div>
            </nav>
            <main role="main" className="container">
                <div className="starter-template">                
                    <Switch>
                        {router.map((item, key) => (
                            <Route key={key} path={item.linkTo} exact component={item.component} />                    
                        ))}
                    </Switch>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default connect()(AppRouter);