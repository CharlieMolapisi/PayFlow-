import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import axios from 'axios'

function HumanResourcesDash() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post('http://localhost:8081/login_test1', {name, surname, username, password})
        /*.then(res=> {

            if(res.data === "Employee Added Successfully") {

                navigate('/dashboard');
            } else {
                alert('Login Failed')
            }
        })
        .catch(err=> console.log(err));*/
    }

    return (

        <div id='navigation-bar'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div>
                <h2>Add a new employee</h2>
            </div>
            <div className='container d-flex justify-content-center align-items-center min-vh-100'>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleInputName1" aria-describedby="namelHelp" placeholder="Name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputSurname1" class="form-label">Surname</label>
                        <input type="surname" class="form-control" id="exampleInputSurname1" aria-describedby="surnameHelp" placeholder="Surname" onChange={e => setSurname(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputUsername1" class="form-label">Username</label>
                        <input type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    )

}

export default HumanResourcesDash;