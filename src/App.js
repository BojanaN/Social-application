import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blog" component={Blog} />
          {/* <Route component={Error} /> */}
        </Switch>
      </div>
    </BrowserRouter>



  );
}

export default App;
