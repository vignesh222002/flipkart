import { Outlet } from 'react-router-dom'
import './profile.css'
import ProfileLeftContent from './profileLeft'

function ProfileContent() {
  return (
    <div className='profileContent'>
        <div className="profileLeftContent">
            <ProfileLeftContent />
        </div>
        <div className="profileRightContent">
            <div className="profileRightContentbox">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default ProfileContent