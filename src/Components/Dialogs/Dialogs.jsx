import React from 'react';
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm';
import AddMessageFormRedux from './AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} photoUrl={d.photoUrl} />);
    let messagesElement = state.messages.map(m => <Messages message={m.message} />);
    let newMessageText = state.newMessageText

    
    let addNewMessage = (values) => {
        props.addMessage(values.newMessageText);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div classname={s.messages}>
                <h4>Messages</h4>
                <div>{messagesElement}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;