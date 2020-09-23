import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email:'', password: ''})
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have a aacount</h2>
                <span>Sign in with your eamil and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />
                    {/* <label>Email</label> */}
                    <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
                    {/* <label>Password</label> */}

                    {/* <CustomButton type="submit"> Sign In </CustomButton> */}
                    <CustomButton onClick={signInWithGoogle}> Sign In </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;