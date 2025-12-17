import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input/Input.tsx'
import { AuthButton } from "../components/AuthButton/AuthButton.tsx";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRetypePasswordVisibility = () => {
        setShowRetypePassword(!showRetypePassword);
    };

    return (
        <div id='login-page'>
            <div className="login-container">
                <div className="login-left">
                    <div className="login-header">
                        <Link to="/" className="logo-link">
                            <div className="logo-placeholder"></div>
                        </Link>
                        <p className="account-link">
                            Already have an account? <Link to='/login'>Sign in</Link>
                        </p>
                    </div>
                    <form className="login-form">
                        <h1>Create your account</h1>
                        <button type="button" className="google-button">
                            Connect with Google
                            <span className="asterisk">*</span>
                        </button>
                        <div className="separator">
                            <span>or</span>
                        </div>
                        <div className="name-fields">
                            <Input text="First name" type="text" />
                            <Input text="Last name" type="text" />
                        </div>
                        <Input text="Email" type="email" />
                        <div className="password-input-wrapper">
                            <Input text="Password" type={showPassword ? "text" : "password"} />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>👁</span>
                        </div>
                        <div className="password-input-wrapper">
                            <Input text="Retype Password" type={showRetypePassword ? "text" : "password"} />
                            <span className="eye-icon" onClick={toggleRetypePasswordVisibility}>👁</span>
                        </div>
                        <AuthButton to="/dashboard" text="Create account" />
                    </form>
                </div>
                <div className="login-right"></div>
            </div>
        </div>
    )
}