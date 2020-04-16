import { BrowserRouter as Router, Route } from "react-router-dom"; //for routing
import React from 'react';
import Dashboard from "./Dashboard";
import newUser from "./User.jsx";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
         <Router>
         <Route path="/" exact component={Dashboard} />
         <Route path="/user" exact component={newUser} />
         <Route path="/user/:id" exact component={newUser} />
         </Router>
        </> );
    }
}
 
export default Home ;