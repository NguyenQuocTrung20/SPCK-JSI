import React from 'react'
import { useAuthStore } from '../../zustandStore/AuthStore'
import SongsCollections from '../songs_collection/SongsCollections'
import SignIn from '../../pages/Auth/SignIn'
import ChatRoom from '../../pages/chat/ChatRoom'

const AuthContext = () => {

    const {userInfo} = useAuthStore()
    const accessToken = userInfo.accessToken

    //ý tưởng AuthContext để kiểm tra theo điều kiện accessToken có hay không để hiển thị trang Login hay trang Home
    // trong route sao cho đúng 




  return <div>{accessToken ? <SongsCollections /> : <SignIn />}</div>;
}

export default AuthContext