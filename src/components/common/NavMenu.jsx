import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from '../../utils/authContext';
import { useHistory } from "react-router-dom";

const NavMenu = ({ isAuthenticated }) => {

    // get the user
    const user = useSelector(state => state.user);
    const { logout } = useAuth();
    const history = useHistory();

    const handleLogout = () => {
        if (logout()) {
            // redirect to login
            history.push('/login');
        }
    }

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {
                    isAuthenticated ? (
                        <>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li>{ user.user.email }<button onClick={handleLogout}>Logout</button></li>
                        </>
                    ) : (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                    )
                }
            </ul>
        </nav>
    )
}

export default NavMenu;