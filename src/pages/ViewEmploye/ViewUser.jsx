import React from 'react'
import { Link } from 'react-router-dom'
import './viewuser.css'

export default function ViewUser() {
  return (
    <>
      <div className="viewuser">
        <span className='view-title-name'>Employee List</span>
        <div className="table">
          <div className="headerRow">
            <div className="column">First Name</div>
            <div className="column">Last Name</div>
            <div className="column">Description</div>
            <div className="columns">Active</div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          {/* -------------- */}
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
          <div className="user-details-row">
            <div className="column-details">Lahiru</div>
            <div className="column-details">Yapa</div>
            <div className="column-details">Engineer</div>
            <div className="column-detailsss"><input type="checkbox" name="" id="" className='checkbox-edit' /></div>
            <div className="column-detailss">
              <Link to="/edit-user" ><button className='edit-button'>Edit</button></Link>
              <Link to="/edit-user" ><button className='deactivate-button'>Deactivate</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
