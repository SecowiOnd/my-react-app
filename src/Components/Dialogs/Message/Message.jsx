import React from 'react';
import s from "./Message.module.css";

const Messages = (props) => {
    return (
        <div className={s.markup}>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
}

export default Messages;