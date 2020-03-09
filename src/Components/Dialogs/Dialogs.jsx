import React from 'react';
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItem/DialogItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />);
    let messagesElement = state.messages.map(m => <Messages message={m.message} />);
    let newMessageText = state.newMessageText

    let addMessage = () => {
        props.addMessage();
        //props.dispatch(addMessageCreator());
    };

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageText(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div classname={s.messages}>
                <h4>Messages</h4>
                <div>{messagesElement}</div>
                <div>
                    <textarea
                        placeholder="Enter your message"
                        onChange={onMessageChange}
                        value={newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;