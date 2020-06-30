import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

export const router = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to = "/">Home </Link>
                        </li>
                        <li>
                            <Link to = "/waiter"> Waiter</Link>
                        </li>
                        <li>
                            <Link to = "/chef">Chef</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path = "/waiter" component = { Waiter }/>
                    <Route path = "/chef" component = { Chef }/>
                    <Route path = "/" component = { Home }/>
                </Switch>
            </div>
        </Router>
    )
}