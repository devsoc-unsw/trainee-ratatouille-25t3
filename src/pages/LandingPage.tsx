import { Link } from 'react-router-dom'
import '../App.css'

export default function LandingPage() {
    return (
        <div id="landing-box">
            <h1>Group Hangout</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}