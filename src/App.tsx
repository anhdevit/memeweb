import {
    BrowserRouter as Router,
    Link, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from "./features/Home";
import Authentication from "./features/Authentication";
import ManageMeme from "./features/ManageMeme";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/authentication">Authentication</Link>
                    </li>
                    <li>
                        <Link to="/manageMeme">ManagerMeme</Link>
                    </li>
                </ul>
                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/authentication">
                        <Authentication />
                    </Route>
                    <Route path="/manageMeme">
                        <ManageMeme />
                    </Route>
                </Switch>

            </div>
        </Router>

    );
}

export default App;


