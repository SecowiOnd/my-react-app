import React from 'react';
import s from "./Dialogs.module.css";
import { BrowserRouter, NavLink } from 'react-router-dom';

const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Messages = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id:1, name:"Dio"},
        {id:2, name:"Jojo"},
        {id:3, name:"Kars"},
        {id:4, name:"Wamuu"},
        {id:5, name:"Caesar"},
        {id:6, name:"Jean Pierre"}
    ]

    let messages = [
        {id:1, message:"Wryy"},
        {id:2, message:"menacing"},
        {id:3, message:"Dora"},
        {id:4, message:"Konodioda"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItems name={d.name} id={d.id} /> );
    let messagesElement = messages.map(m => <Messages message={m.message}/>);
      
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div classname={s.messages}>
                <h4>Messages</h4>
                    {messagesElement}
                </div>
            </div>
    )
}

export default Dialogs;