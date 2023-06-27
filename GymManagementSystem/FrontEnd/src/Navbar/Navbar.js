import "../CSS/index.css";
import "../CSS/Navbar.css";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav1">
      <div>
        <br></br>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}></div>

          <div style={{ flex: 1 }}>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Identity</h5>
                      <p className="card-text">
                        <center>
                          <table>
                            <tbody>
                              <tr>
                                <td>Name:-</td>
                                <td>Atharva Adrakatti</td>
                              </tr>
                              <tr>
                                <td>Institute:-</td>
                                <td>Sunbeam Pune</td>
                              </tr>
                              <tr>
                                <td>Project:-</td>
                                <td>Gym Management System</td>
                              </tr>
                            </tbody>
                          </table>
                        </center>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}></div>
        </div>
        <hr></hr>
      </div>

      <nav>
        <ul>
          <li>
            <img src={Logo} alt="" />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
            <Link to="/createUser">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      
    </div>
  );
}

export default Navbar;
