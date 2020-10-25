//Dependences
import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Components
import RedirectExternal from '../components/utils/RedirectExternal';

//Styles
import '../assets/styles/App.scss';
import HomeContainer from '../containers/HomeContainer';

//App
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    
                    <Route exact path="/" component={HomeContainer} />
                    {/* external */}
                    <Route path="/dilan">
                        <RedirectExternal loc=""></RedirectExternal>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
