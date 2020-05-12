import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {createField, Input} from '../Common/FormsControls/FormsControls';
import { login, logout } from '../../Redux/auth-reducer';
import { requied, maxLengthCreator } from '../../Utilites/validation/validators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import s from "../Common/FormsControls/FormsControl.module.css"


const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", Input, [requied, maxLength30] )}
            {createField("Password", "password", Input, [requied, maxLength30], {type: "password"})}
            {createField(null, "rememberMe", Input, null,{type: "checkbox"}, "Remember Me")}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Sign up</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    if (props.captcha) {

    }

    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login);