import './LoginPage.css'

import { useRef, useState, useEffect } from "react"
import { loginUser } from '../utils/connector'
import { getUserFrends } from '../utils/connector';
import AppContext from '../context/AppContext';
import { useContext } from 'react';

import { useNavigate } from 'react-router';


export default function LoginPage(){
    const navigateTo = useNavigate()

    const { setCurrentUser, setUserFrends, activeChatState, setChecked } = useContext(AppContext);

    const [ usernameInp, setUsernameInp ] = useState('')
    const [ passwordInp, setPasswordInp ] = useState('')
    const [ isLogin, setIsLogin ] = useState(true)
    const buttonRef = useRef(null);
    const suggDivRef = useRef(null)
    const errDivRef = useRef(null)
    const [ usernamErrText , setUsernameErrText ] = useState('');
    const [ passwordErrText , setPasswordErrText ] = useState('');
    const [ errText , setErrText ] = useState('');
    function changeButtonName(){
        setIsLogin(!isLogin)
    }

    function submitCreds(){
        if(isLogin){
            loginUser({username: usernameInp, password: passwordInp}, (user, err) => {
                setChecked(true);
                console.log(user)
                // console.log(err)
                if(!user){
                    setErrText('Username or Password are incorrect');
                    console.log(err); return;
                }
                else{
                    navigateTo('/')
                    localStorage.setItem('chatterAndSomething99',JSON.stringify({username: usernameInp, password: passwordInp}))
                    activeChatState[1](undefined)
                    setCurrentUser(user);
                    console.log('currentUser:::::: ', user)
                    getUserFrends({user: user}, (frends, err) => {
                        if(err) console.log(err);
                        else setUserFrends(frends);
                    })
                }
            });
        }
        else{
            return;
        }
    }
    useEffect(() => {
        let valid = /^[a-z0-9._]+$/.test(usernameInp)
        let isShort = usernameInp.length < 4 || usernameInp.length > 15
        
        if(!valid && isShort) setUsernameErrText('Username must be between 4 to 15 characters\nContaining only lowercase letters, digits, underscore(_) and fullstop(.)')
            else if(isShort) setUsernameErrText('Username must be between 4 to 15 characters')
        else if(!valid) setUsernameErrText('Username can contain only lowercase letters, digits, underscore(_) and fullstop(.)')
        else if(valid && !isShort) setUsernameErrText('')
        if(usernameInp === '') setUsernameErrText('')
        console.log(usernameInp)
    }, [usernameInp])
    async function usernameChecker(e){
        setUsernameInp(e.target.value)
    }
    useEffect(() => {
        let valid = /^[A-Za-z0-9_.@#$%^&*!+=\-/]{8,18}$/.test(passwordInp)
        if(!valid) setPasswordErrText('Password conditions: From 8-18 characters\nAllowed characters: alphanumeric and _.@#$%^&*!+=-')
        else setPasswordErrText('')
        if(passwordInp === '') setPasswordErrText('')
    }, [passwordInp])
    async function passwordChecker(e){
        setPasswordInp(e.target.value)
    }

    return (
        <div className="login-page">
            <div className="login-cont">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" 
                    onChange={usernameChecker} value={usernameInp}/>
                <div className="err-div" ref={errDivRef}>{usernamErrText}</div>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" 
                    onChange={passwordChecker} value={passwordInp} />
                <div className="err-div" ref={errDivRef}>{passwordErrText}</div>

                <div className="buttons">
                    <button className="reset" 
                        onClick={() =>{setUsernameInp(''); setPasswordInp('')}}
                    >Reset</button>
                    <button className="loginOrReg" ref={buttonRef} onClick={submitCreds}>Login</button>
                </div>

                <div className="suggestion" ref={suggDivRef}>
                    { isLogin ? (
                            <>
                                New Here?
                                <span onClick={changeButtonName} >Register</span>
                            </>
                        ): (
                            <>
                                Already have an account?
                                <span onClick={changeButtonName} >Login</span>
                            </>
                        )
                    }
                </div>
                <div className="err-div" ref={errDivRef}>{errText}</div>
            </div>
        </div>
    )
}

/*
probelm: the consoleLog in usernameChecker is lagging behind a character
    reason: React upadtes the html for stateVars in a different async way than promise - so await doesnt work on it
    solns:  1. Use useEffect - execute this function after usernameInp gets updated
            2. use flushSync(() => setUsernameInp(e.target.value));  to force update of usernameInp
            3. use e.target.value inside log() as usernameInp definitely going to get updated -- so work with what u got for now 
    soln: 1 
*/