import React from "react";
import "./mail.css"
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useHistory} from "react-router";
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Mail() {

    const history = useHistory()

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={ () => history.push('/') }>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>

                    <IconButton>
                        <ErrorIcon />
                    </IconButton>

                    <IconButton>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton>
                        <EmailIcon />
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
                <div className="mail__toolsRight">

                </div>
            </div>

            <h1>Mail page</h1>
        </div>
    )
}

export default Mail