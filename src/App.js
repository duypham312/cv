import {Component} from "react";
import Header from "./components/Header";
import CV from "./components/CV";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CV/>
            </div>
        );
    }
}

export default App;
