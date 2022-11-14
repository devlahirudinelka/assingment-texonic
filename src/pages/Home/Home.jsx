import React from 'react'
import NavLinkBar from '../../Componets/NavBarLinkComponent/NavLinkBar'
import './home.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CreateUser from '../CreateEmploye/CreateUser';
import ViewUser from '../ViewEmploye/ViewUser';
import Welcome from '../Welcome';
import UpdateEmploye from '../UpdateEmploye/UpdateEmploye';
export default function Home(props) {
    return (
        <>
            <div className="home">
                <BrowserRouter>
                    <div className="nan-link-bar">
                        <NavLinkBar
                            icons="https://i.imgur.com/X47eTVg.png"
                            titleNavLinks="Create Employee"
                            route="/create-user"
                        />
                        <NavLinkBar
                            icons="https://i.imgur.com/C6GSTQ4.png"
                            titleNavLinks="View Employees"
                            route="/user-details"
                        />
                    </div>
                    <div className="pages-view-bar">
                        <Routes>
                            <Route path="/" exact element={<Welcome />}></Route>
                            <Route path="/create-user" exact element={<CreateUser />}></Route>
                            <Route path="/user-details" element={<ViewUser />}></Route>
                            <Route path="/edit-user" element={<UpdateEmploye/>}/>
                            
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        </>
    )
}
