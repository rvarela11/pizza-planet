// @vendors
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// @components
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Order from '../Order/Order';
import Footer from '../Footer/Footer';

// @styles
import './App.scss';

const App = () => (
    <div className="App">
        <Header />
        <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/order" component={Order} />
        </Switch>
        <Footer />
    </div>
);

export default App;
