import { Outlet } from 'react-router-dom'
import './profile.css'
import ProfileLeftContent from './profileLeft'
import { useEffect, useState } from 'react'
import { IP, Port } from '../../IP Address/IPAddress'
import axios from 'axios'

function ProfileContent() {
  const [user, setUser] = useState({})

  // useEffect(() => console.log("updated",user),[user])

  function get() {
    const token = localStorage.getItem('token')

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    axios.get(`http://${IP}:${Port}/getProfile`, config)
      .then(res => {
        // console.log(res.data)
        setUser(res.data)
      })
  }
  function getName() {
    const token = localStorage.getItem("token")
    let config = {
      method: 'get',
      url: `http://${IP}:${Port}/getName`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    axios.request(config)
      .then((response) => {
        console.log(response.data)
        if (response.data.status) setUser(response.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => getName(), [])

  return (
    <div className='profileContent'>
      <div className="profileLeftContent">
        <ProfileLeftContent user={user} />
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