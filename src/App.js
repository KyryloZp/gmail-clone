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
import SendMail from "./components/SendMail/SendMail";
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import EmailList from "./components/EmaiList/EmaiList";

function App() {

    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

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
                            <EmailList />
                        </Route>
                    </Switch>
                </div>
                {sendMessageIsOpen && <SendMail /> }
            </div>
        </Router>
    )
}

export default App;


