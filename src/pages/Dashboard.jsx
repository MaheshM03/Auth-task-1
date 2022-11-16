import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Dashboard = ({ login }) => {

    const navigate=useNavigate()

    const [users, setusers] = useState([])
    const [update, setupdate] = useState(false)

    const getAllUsers = async () => {
        const { data } = await axios.get("http://localhost:5000/users")
        setusers(data)
    }

    useEffect(() => {
        login.userName
        ?getAllUsers()
        :navigate('/login')
        return () => {
        }
    }, [update,login])

    console.log(login);
    return <>
        {
            login.admin
                ? <>
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.userName}</td>
                                    <td>
                                        <button className='btn btn-sm btn-outline-warning'>
                                            <i className='bi bi-pencil-square'></i>
                                        </button>
                                        &nbsp;&nbsp;
                                        <button className='btn btn-sm btn-outline-danger'>
                                            <i className='bi bi-trash'></i>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </>
                : <>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">UserName</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.userName}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </>
        }
    </>
}

export default Dashboard