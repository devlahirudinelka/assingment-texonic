import React from 'react'
import { Link } from 'react-router-dom'
import './navlinkbar.css'

export default function NavLinkBar(props) {
    return (
        <>
            <div className="navLinkBar">
                <Link to={props.route} className='navLink'>
                    <img src={props.icons} alt="" className='nav-link-img' />
                    <span className='text-nav-links'>{props.titleNavLinks}</span>
               </Link>
            </div>
        </>
    )
}
