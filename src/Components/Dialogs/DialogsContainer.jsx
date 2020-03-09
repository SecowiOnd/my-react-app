import React from 'react';
import s from "./Dialogs.module.css";
import { updateNewMessageTextCreator, addMessageCreator } from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    };

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    }

    return (
       <Dialogs 
        addMessage={addMessage} 
        updateNewMessageText={onMessageChange}
        dialogsPage={state}/>
    )
}

export default DialogsContainer;