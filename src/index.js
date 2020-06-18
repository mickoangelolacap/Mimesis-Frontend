import React from 'react';
import ReactDOM from 'react-dom';
/*for router*/
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/*for apollo client*/
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
/*Page imports*/
// import AppNavbar from './components/AppNavBar'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ArtistPage from './pages/ArtistPage'
import TransactionPage from './pages/TransactionPage'
import AdminPage from './pages/AdminPage'

import './index.css'




// Apollo setup.
const client = new ApolloClient({ uri: 'https://boiling-citadel-41652.herokuapp.com/graphql' })
// const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' })

// React rendering to DOM.
const pageComponent = (
	 <ApolloProvider client={ client }>
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/register" component={ RegisterPage }/>
                <Route exact path="/" component={ LoginPage }/>
                <Route exact path="/home" component={ HomePage }/>
                <Route exact path="/artist" component={ ArtistPage }/>
                <Route exact path="/transaction" component={ TransactionPage }/>
                <Route exact path="/admin" component={ AdminPage }/>
            </Switch>
        </BrowserRouter>
    </ApolloProvider>
)

ReactDOM.render(pageComponent,  document.getElementById('root'));
