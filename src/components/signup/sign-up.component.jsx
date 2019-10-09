import React from 'react'
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert('Passwords did not match')
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });


            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.error(err)
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h1 className='title'>
                    I don't have an account
                </h1>
                <span >create account</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        onChange={this.handleChange}
                        value={displayName}
                        label='Display Name'
                    />
                    <FormInput
                        type='email'
                        name='email'
                        onChange={this.handleChange}
                        value={email}
                        label='Email'
                    />
                    <FormInput
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        value={password}
                        label='Password'
                    /><FormInput
                        type='password'
                        onChange={this.handleChange}
                        name='confirmPassword'
                        value={confirmPassword}
                        label='confirmPassword'
                    />
                    <CustomButton type='submit' >Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp