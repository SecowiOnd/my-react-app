import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { requied, maxLengthCreator} from '../../../Utilites/validation/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const PostMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your post" name="newPostText" component={Textarea} 
                validate={[requied, maxLength10]}/>
            </div>
            <div><button>Add Post</button></div>
        </form>
    )

}

const AddPostFormRedux = reduxForm({ form: 'profilePostMessageForm' })(PostMessageForm)

export default AddPostFormRedux;