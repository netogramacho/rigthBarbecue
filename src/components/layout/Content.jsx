import './Content.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../../views/Dashboard';
import Login from '../../views/Login';
import Barbecue from '../../views/Barbecue';
import CreateBarbecue from '../../views/CreateBarbecue';

export default function Content() {

    let title = "Agenda de Churras"

    return (
        <main className='Content'>
            <div className='Background--Image'>
                <h1>
                    {title}
                </h1>
            </div>
            <Switch>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
    
                <Route path='/barbecue/:id'>
                    <Barbecue />
                </Route>
                
                <Route path='/create-barbecue'>
                    <CreateBarbecue />
                </Route>

                <Route path='/'>
                    <Login />
                </Route>
            </Switch>
      </main>
  
    )

}
