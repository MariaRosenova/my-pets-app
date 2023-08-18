import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as authService from './services/authService';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import MyPets from './components/PetCard';

function App() {
    const [userInfo, setUserInfo] = useState({isAuthenticated: false, username:''});

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user,
        })
        
    },[])

    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated:true,
            user:username
        })
    }
    console.log({...userInfo})
    return (
        <div id="container">
            <Header {...userInfo} />

            <main id="site-content">
                <Routes>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/login" element={<Login onLogin={onLogin} />}/>
                    <Route path="/logout" element={<Logout />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/my-pets" element={<MyPets/>}/>
                    <Route path="/create" element={<Create/>}/>
                </Routes>
            </main>
            <footer id="site-content">
                <p>@PetMyPet</p>
            </footer>
        </div>
    );
}

export default App;