import { Link } from 'react-router-dom'

export default function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}