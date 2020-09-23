import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
           await auth.signInWithEmailAndPassword(email, password);
           this.setState({email:'', password: ''});
        } catch(error) {
            console.log('error wy=hile signing in' + error.message);
        }
        
        
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
                    <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;