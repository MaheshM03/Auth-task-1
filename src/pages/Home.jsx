import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ login }) => {

    const navigate = useNavigate()

    useEffect(() => {

        login.userName
            ? ""
            : navigate('/login')
        return () => {

        }
    }, [login])


    return (
        <div className='container m-auto'>
            <div className="card">
                <div className="card-header bg-primary text-light text-center">
                    <h3>Hello {login.name}</h3>
                </div>
                <div className="card-body">
                    <div className='d-flex'>
                        <h6>UserName</h6> : {login.userName}
                    </div>
                    <div className='d-flex'>
                        <h6>Email</h6> :{login.email}
                    </div>
                    <div className='d-flex'>
                        <h6>Password</h6> :{login.password}
                    </div>
                    <div className='d-flex'>
                        <h6>Admin</h6> :{login.admin ? "True" : "False"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home