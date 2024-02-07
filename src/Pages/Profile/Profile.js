import React from 'react'
import ProfileDetailsUser from '../../Components/ProfileComponents/ProfileDetailsUser'
import ReqUserPostPart from '../../Components/ProfileComponents/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>
      <div>
        <ProfileDetailsUser/>
      </div>
      <div>
        <ReqUserPostPart/>
      </div>
    </div>
    )
}

export default Profile