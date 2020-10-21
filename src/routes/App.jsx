//Dependences
import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Components
import Home from '../components/Home';
import Layout from '../components/Layout';
import RedirectExternal from '../components/utils/RedirectExternal';

//Styles
import '../assets/styles/App.scss';

//App
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                    
                        <Route exact path="/" component={Home} />
                        
                        {/* external */}
                        <Route path="/external/github-profile">
                            <RedirectExternal loc="https://github.com/DilanAriza/"/>
                        </Route>

                        <Route path="/external/rest-api" >
                            <RedirectExternal loc="https://github.com/DilanAriza/curso-backend-node-platzimovies"/>
                        </Route>

                        <Route path="/external/platzi-profile">
                            <RedirectExternal loc="https://platzi.com/@Dilan-Santiago-Ariza/"/>
                        </Route>
                    
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}
