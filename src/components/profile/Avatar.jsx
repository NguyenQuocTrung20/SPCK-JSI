import React from 'react'
import { useAuthStore } from '../../zustandStore/AuthStore'

const Avatar = () => {
  const defauttAvatar =
    'https://media.vov.vn/sites/default/files/styles/large/public/2023-03/2023-03-05t191059z_287260231_up1ej351evtyi_rtrmadp_3_soccer-england-liv-mun-report.jpg'
  const userInfo = useAuthStore((state) => state.userInfo)
  const { profileImageUrl, active } = userInfo

  console.log(profileImageUrl)

  return (
    <div className={`avatar ${active ? 'online' : 'offline'}`}>
      <div className="w-24 rounded-full">
        <img src={profileImageUrl ? profileImageUrl : defauttAvatar} />
      </div>
    </div>
  )
}

export default Avatar
