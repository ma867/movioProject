import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
export default function NavBar() {
  return (
<>
<div id="nav-bar">
  <div id="logo">
     <img
      style={{ width: "150px" }}
      src="https://i.imgur.com/j9nNyb4.png"
      alt="movio"
    />
  
  </div>

  <div id="nav-links">
     <Link to="/">Home</Link>
     <Link to="/profile">Profile</Link>
    <a href=""  onClick={() => { logOut() }}>Logout</a>
  </div>
</div>



</>





    // <nav>
    //   <Link to="/orders">Order History</Link>
    //   &nbsp; | &nbsp;
    //   <Link to="/orders/new">New Order</Link>
    // </nav>
  );
}