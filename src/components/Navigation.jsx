import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ login,setlogin }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-dark mb-5">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            login.userName
                                ? <>
                                {
                                    login.admin
                                    ?<>
                                    <Link to='/' className="nav-link">Home</Link>
                                    <Link to='/dashboard' className="nav-link">DashBoard</Link>
                                <div class="dropdown">
                                  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                    {login.userName}
                                  </button>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={e=>{
                                        window.localStorage.removeItem("UserData")
                                        setlogin({})
                                    }} >Log Out</a></li>
                                  </ul>
                                </div>
                                    </>
                                    :<>
                                    <Link to='/' className='nav-link'>Home</Link>
                                    <div class="dropdown">
                                  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                                    {login.userName}
                                  </button>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={e=>{
                                        window.localStorage.removeItem("UserData")
                                        setlogin({})
                                    }} >Log Out</a></li>
                                  </ul>
                                </div>
                                    </>
                                }
                                
                                </>
                                : <>
                                    <Link to='/login' className="nav-link">Login</Link>
                                    <Link to='/register' className="nav-link">SignUp</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation