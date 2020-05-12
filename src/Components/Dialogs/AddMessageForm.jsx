import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { requied, maxLengthCreator} from '../../Utilites/validation/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message" name="newMessageText" component={Textarea} 
                validate={[requied, maxLength100]}/>
            </div>
            <div><button>Add Post</button></div>
        </form>
    )

}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default AddMessageFormRedux;