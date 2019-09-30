import React, { Component } from 'react';

import routes from './routes'
import MenuPage from './components/Menu/Menu'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import './App.css';

class App extends Component {

  render() {
    var state = localStorage.getItem('state');
    if(state)
    {
        window.location.reload();
        localStorage.removeItem('state');
    }
    return (
        <Router>
          <div >
          <link rel="stylesheet" href="./servicesStyle/css/style.css"/>
                <div id="top-header" className="hello">
                    <div id = "contact-header">
                        <span className = "green-color mr-r-50"><i className="fa fa-question-circle-o green-color icon-mr-r-10" aria-hidden="true"></i>Have a question?</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-phone green-color icon-mr-r-10" aria-hidden="true"></i>0344 656 534</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-envelope-o green-color icon-mr-r-10" aria-hidden="true"></i>sound@myapi.com</span>
                    </div>

                <div class="ml-auto">
                    <div class="social-wrap">
                    <a href="#"><span class="icon-facebook"><i class="fa fa-facebook" aria-hidden="true"></i></span></a>
                    <a href="#"><span class="icon-twitter"><i class="fa fa-twitter" aria-hidden="true"></i></span></a>
                    <a href="#"><span class="icon-linkedin"><i class="fa fa-instagram" aria-hidden="true"></i></span></a>

                    </div>
               </div>                

                </div>   

                <MenuPage/>
            {this.showContentMenu(routes)}
          </div>
        </Router>
    );
  }

  showContentMenu = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((routes, index) => {
        return <Route key={index} path={routes.path} component={routes.main} exact = {routes.exact} />;
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
