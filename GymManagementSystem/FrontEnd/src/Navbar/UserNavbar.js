
import { Link,useHistory } from 'react-router-dom';

function UserNavbar() {

    const history = useHistory();

    const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push('/login');
    }
    return (
            
            <div className="trainNav">
                <br></br>
                <nav>
                    <ul>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to='/activities'>Activities</Link>
                        </li>
                        <li>
                            <Link to='/membershiPlans'>MembershipPlans</Link>
                        </li>
                        <li>
                            <Link to='/dietplans'>DietPlans</Link>
                        </li>
                        <li>
                            <Link to='/workoutexercises'>Exercises</Link>
                        </li>
                        <li>
                            <Link to='/workouts'>Workouts</Link>
                        </li>
                        <li>
                            <Link to='/membershipForm'>MemberShipForm</Link>
                        </li>
                        <li>
                            <Link to='/payForMembership'>PayForMembership</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={handleLogout}>Logout</Link>
                        </li>
                        <li>
                            <Link to="#"></Link>
                        </li>
                    </ul>
                </nav>
            </div>
    ) 
}

export default UserNavbar;