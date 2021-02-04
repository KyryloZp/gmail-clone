import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/Sidebar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Mail from "./components/Mail/Mail";
import EmaiList from "./components/EmaiList/EmaiList";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="app__body">
                    <Sidebar/>
                    <Switch>
                        <Route path="/mail">
                            <Mail />
                        </Route>
                        <Route path="/">
                            <EmaiList />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;


