import React from 'react';
import s from "./../Dialogs.module.css";
import { BrowserRouter, NavLink } from 'react-router-dom';


const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <div>
                <img src={props.photoUrl} />
            </div>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;