import React from 'react'
import './signin-signup.styles.scss'
import SignIn from '../../components/signin/sign-in.component'
import SignUp from '../../components/signup/sign-up.component'

const SigninSignup = ()=>(
    <div className='sign-in-sign-up'>
        <SignIn/>
        <hr width="1" size="500"/>


        <SignUp/>
    </div>
)

export default SigninSignup