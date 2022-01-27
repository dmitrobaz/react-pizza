import React from 'react';
import { Button } from '../componets';

const Login = () => {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [loginDirty, setLoginDirty] = React.useState('')
    const [emailDirty, setEmailDirty] = React.useState('')
    const [passwordDirty, setPasswordDirty] = React.useState('')
    const [emailError, setEmailError] = React.useState('Email не может быть пустым!')
    const [passwordError, setPasswordError] = React.useState('Password не может быть пустым!')
    const [loginError, setLoginError] = React.useState('Login не может быть пустым!')
    const [formValid, setFormValid] = React.useState(false)

    React.useEffect(() => {
        if (loginError || emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [loginError, emailError, passwordError]);

    const handlerOnBlur = e => {
        switch (e.target.name) {
            case 'login':
                setLoginDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const emailHandler = e => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email')
            if (!e.target.value) {
                setEmailError('Email не может быть пустым!')
            }
        } else {
            setEmailError('')
        }
    }
    const loginHandler = e => {
        if (!/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(e.target.value)) {
            setLoginError('Не правильный Login')
            if (!e.target.value) {
                setLoginError('Login не может быть пустым!')
            }
        } else {
            setLoginError('')
        }
    }
    const passwordHandler = e => {
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(e.target.value)) {
            setPasswordError('Не правильный Password')
            if (!e.target.value) {
                setPasswordError('Password не может быть пустым!')
            }
        } else {
            setPasswordError('')
        }
    }
    const buttonHandler = e => {
        e.preventDefault()
    }

    return (
        <form action="" className='login-form'>
            <label >Регистрация</label>

            {(loginDirty && loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
            <input onChange={e => { loginHandler(e) }} onBlur={e => { handlerOnBlur(e) }} type="text" name="login" placeholder="Input your login" />

            {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
            <input onChange={e => { passwordHandler(e) }} onBlur={e => { handlerOnBlur(e) }} type="password" name="password" placeholder="Input your password" />

            {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
            <input onChange={e => { emailHandler(e) }} onBlur={e => { handlerOnBlur(e) }} type="email" name="email" placeholder="Input your email" />
            {/* <button disabled={!formValid} onClick={e => { buttonHandler(e) }} className='button button--outline' type="submit">Зарегистрироваться</button> */}
            <Button disabled={!formValid} onClick={e => { buttonHandler(e) }} className='button--outline'>Зарегистрироваться</Button>
        </form>
    );
}

export default Login;
