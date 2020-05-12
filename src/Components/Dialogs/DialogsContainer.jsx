import React from 'react';
import { addMessageCreator } from "../../Redux/dialogs-reducer"
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer = (props) => {

//     let state = props.store.getState().dialogsPage

//     let addMessage = () => {
//         props.store.dispatch(addMessageCreator());
//     };

//     let onMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageTextCreator(body));
//     }

//     return (
//        <Dialogs 
//         addMessage={addMessage} 
//         updateNewMessageText={onMessageChange}
//         dialogsPage={state}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => { dispatch(addMessageCreator(newMessageText)); }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);