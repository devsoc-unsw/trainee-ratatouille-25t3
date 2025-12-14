import { Link } from 'react-router-dom'

export default function SignupPage() {
    return (
        <div>
            <h1>Signup</h1>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}