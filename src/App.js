import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './compoents/Header/Header';
import Home from './compoents/Home/Home';
import About from './compoents/About/About';
import NotFound from './compoents/NotFound/NotFound';
import Reviews from './compoents/Reviews/Reviews';
import Footer from './compoents/Footer/Footer';
import Services from './compoents/Services/Services';
import Login from './compoents/Login/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Router path="/home">
            <Home></Home>
          </Router>
          <Router path="/about">
            <About></About>
          </Router>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Reviews></Reviews>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;

