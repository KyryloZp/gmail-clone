import React from "react";
import "./emaiList.css"
import {Checkbox, IconButton} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "../Section/Section";
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from "../EmailRow/EmailRow";

function EmaiList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__section">
                <Section Icon={InboxIcon} title='primary' color="red" selected/>
                <Section Icon={PeopleIcon} title='Social' color="#1A73E8"/>
                <Section Icon={LocalOfferIcon} title='Promotions' color="green"/>
            </div>
            <div className="emailList__list">
                <EmailRow  title="Twitch" subject="Hey fellow streamer!!"  description="This is a test This is a test This is a test This is a test This is a test" time="10pm" id="1"/>
                <EmailRow  title="Twitch" subject="Hey fellow streamer!!"  description="This is a test This is a test This is a test This is a test This is a test" time="10pm" id="1"/>
            </div>
        </div>
    )
}

export default EmaiList;