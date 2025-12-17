import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input/Input.tsx'
import { AuthButton } from "../components/AuthButton/AuthButton.tsx";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                            Don't have an account? <Link to='/signup'>Sign up</Link>
                        </p>
                    </div>
                    <form className="login-form">
                        <h1>Sign in to your account</h1>
                        <button type="button" className="google-button">
                            Connect with Google
                            <span className="asterisk">*</span>
                        </button>
                        <div className="separator">
                            <span>or</span>
                        </div>
                        <Input text="Email" type="email" />
                        <div className="password-input-wrapper">
                            <Input text="Password" type={showPassword ? "text" : "password"} />
                            <span className="eye-icon" onClick={togglePasswordVisibility}>👁</span>
                        </div>
                        <a href="#" className="forgot-password">Forgot password?</a>
                        <AuthButton to="/dashboard" text="Sign in" />
                    </form>
                </div>
                <div className="login-right"></div>
            </div>
        </div>
    )
}