import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react'
import Header from './Header';
import App from '../App';
import Country from './Country';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <div className="routes">
                    <Switch>
                        <Route exact path='/' component={App}/>
                        {/* <Route exact path="/country/:country" component={Country}/>                         */}
                        <Route exact path="/country/:country" element={<Country  />}/>                        
                        {/* <Route exact path="/country/:country" element={<Country {...props} />}/>                         */}
                    </Switch>
                </div>
            </BrowserRouter>            
        </div>
    )
}
