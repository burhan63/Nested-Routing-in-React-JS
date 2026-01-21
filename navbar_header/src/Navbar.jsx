import { Link } from "react-router";
import './external.css'

function Navbar(){
    return(
        <div className="header">
        {/* header div */}
        <div>
          <Link className="link"><h2>Website Logo</h2></Link>
        </div>

        {/* items div */}
        <div>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/contactUs">Contact</Link>
            </li>
            <li>
              <Link className="link" to="/college">College</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Navbar;