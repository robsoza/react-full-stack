import './App.css';
import React from 'react';
import { ContextProvider } from './context/ContextProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/NavbarComp'
import NotFound from './components/NotFoundComp';
import Home from './components/HomeComp';
import PersonForm from './components/PersonFormComp';
import About from './components/AboutComp';
import Footer from './components/layout/FooterComp';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div>
            <Switch>
              <Route exact path={['/', '/home']}> <Home/> </Route>
              <Route path='/form' component={PersonForm} />
              <Route path='/about' component={About} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;