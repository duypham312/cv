import {Component} from "react";
import Header from "./components/Header";
import CV from "./components/CV";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CV/>
                <Footer/>
            </div>
        );
    }
}

export default App;
