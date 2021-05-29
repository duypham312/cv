import {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "./components/Header";
import CV from "./components/CV";
import Footer from "./components/Footer";
import HireMe from "./components/HireMe";
import Projects from "./components/Projects";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>

                    <Route exact path={'/'} component={CV}/>

                    <Route exact path={'/projects'} component={Projects}/>

                    <Route exact path={'/hire'} component={HireMe}/>

                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
