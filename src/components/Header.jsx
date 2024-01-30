import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem('user-info'));
    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    const logout = () =>{
        localStorage.clear();
        navigate("/register");
    }
    
    return (
        <>
            <header>
                <nav>
                    {
                        localStorage.getItem("user-info") ?
                            <>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Registration</Link>
                            </>
                    }
                    {
                        (localStorage.getItem("user-info"))?
                    (<div style={{position:"absolute", top:"2%", right:"2%"}}>
                        <button onClick={handleDropdownToggle}>{user.name}</button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li onClick={logout} style={{cursor:"pointer"}}>Logout</li>
                                <li style={{cursor:"pointer"}}>Profile</li>
                            </ul>
                        )}
                    </div>)
                    :
                    (<div style={{position:"absolute", top:"2%", right:"2%"}}>
                        <button >Add User</button>
                    </div>)
                    }
                </nav>
            </header>
        </>
    )
}

export default Header;