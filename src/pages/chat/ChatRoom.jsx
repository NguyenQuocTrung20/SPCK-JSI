import React from 'react'

import { useAuthStore } from '../../zustandStore/AuthStore'
import SignIn from '../Auth/SignIn'

const ChatRoom = () => {
  const accessToken = useAuthStore(state => state.userInfo.accessToken)
  if (!accessToken) {
    return <SignIn />
  }

  return (
    <div>ChatRoom</div>
  )
}

export default ChatRoom