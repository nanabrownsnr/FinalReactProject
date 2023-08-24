import React from 'react';
import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../reduxslice/userslice";



export default function NavBar() {

    const username = useSelector((state)=> state.userreducer.username);
    const isLoggedIn = useSelector((state)=> state.userreducer.isLoggedIn);
    const dispatch = useDispatch();
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" to="#">
              FindMyEvents
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="">
                      Home
                    </Link>
                  </li>
                  {
                  isLoggedIn && 
                  <li className="nav-item">
                    <Link className="nav-link" to="/myevents">
                      My Events 
                    </Link>
                  </li>
                  }
                  {
                    !isLoggedIn && 
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login 
                    </Link>
                  </li>
                  }
                  {
                    isLoggedIn && 
                  <li className="nav-item">
                    <a className="nav-link" href="/" onClick={()=>dispatch(logoutUser())}>
                      Logout 
                    </a>
                  </li>
              }
                  {
                    !isLoggedIn && 
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register 
                    </Link>
                  </li>
              }
                </ul>
              </div>
              {
                    isLoggedIn && 
              <div><Link className="nav-link" to={`/profile/${username}`}>
                      {username} 
                    </Link></div>
            }
            </div>
          </nav>
        </div>
      );
}
