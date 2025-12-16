import { Link } from 'react-router-dom'
import { Input } from '../components/Input/Input.tsx'
import { AuthButton } from "../components/AuthButton/AuthButton.tsx";

export default function LoginPage() {
    return (
        <>
            <form id='login-box'>
                <h1>Login</h1>
                <Input text="Email" />
                <Input text="Password" />
                <a>Forgot password?</a>
                <AuthButton to="/dashboard" text="login" />
                <p>
                    Don't have an account? <Link to='/signup'>Signup</Link>
                </p>
            </form>
            <Link to="/">Home</Link>
        </>
    )
}