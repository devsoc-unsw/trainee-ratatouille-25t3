import { Link } from 'react-router-dom'
import '../App.css'

export default function DashboardPage() {
    return (
        <div id="dashboard-box">
            <h1>Dashboard Page</h1>
            <p>I need to add some sort of verification</p>
            <Link to="/">Logout</Link>
        </div>
    )
}