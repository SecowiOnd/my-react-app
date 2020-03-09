import React from 'react';
import s from "./../Dialogs.module.css";
import { BrowserRouter, NavLink } from 'react-router-dom';


const DialogItems = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.img}{props.name}</NavLink>
        </div>
    )
}

export default DialogItems;