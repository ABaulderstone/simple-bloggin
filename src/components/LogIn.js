import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { parseError } from '../config/api';
import { useGlobalState } from '../config/store';
import { logInUser } from '../services/userServices';
import { Block, InputButton, Label, Input } from '../styled-components'

/**
* @author
* @function LogIn
**/

export const LogIn = (props) => {
    const initialValues = {login: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [errorMessage, setErrorMessage] = useState("")
    const {dispatch} = useGlobalState()
    const navigate = useNavigate()
    
    function handleChange(event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        logInUser(formValues)
            .then(response  => {
                console.log(response);
                dispatch({type:"setLoggedInUser", data: response.username});
                dispatch({type:"setJWT", data: response.jwt});
                navigate("/")
            })
            .catch(error =>  {
                const message = parseError(error);
                setErrorMessage(message);
            })
    }

    return(
    <form onSubmit={handleSubmit}>
         {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        <Block>
            <Label>Login</Label>
            <Input  onChange={handleChange} type="text" name="login" placeholder="Enter email" value={formValues.login} />
        </Block>
        <Block>
            <Label>Password</Label>
            <Input onChange={handleChange} type="password" name="password" placeholder="Enter email" value={formValues.password} />
        </Block>
        <Block>
            <InputButton type="submit" value="Log In" />
        </Block>
    </form>
   )

 }