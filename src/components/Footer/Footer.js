import { Link } from 'react-router-dom';
import { logOut } from '../../utilities/users-service';
export default function Footer() {
  return (
    <div id="footer">
        <div id="inner-footer">
            <div>
                <h1>About</h1><br />
                <p>   
              Movio is a small movie critics app made with love at General Assembly.
</p>
            </div>

            <div>
                <h1>Follow Us</h1><br />
                <span><i className="fab fa-twitter mr-2"/> movi-o</span><br />
                <span><i className="fab fa-instagram mr-2"/> movi-o</span>
            </div>
        </div>

        <div id="copyright">&copy; 2023</div>
    </div>
  );
}