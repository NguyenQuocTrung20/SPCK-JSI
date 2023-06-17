import React, {useState} from 'react'
import { db, CHAT_ROOM } from '../../firebase/firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';



const SendMessage = () => {
    const [message, setMessage] = useState('')

    const chatRef = collection(db,CHAT_ROOM)



    const handleSendMessage = async (e) => {
        e.preventDefault()
        if(message.trim() === '') return 
        try {
            const payload = {
                id : 1,
                content : message,
                createdAt: serverTimestamp(),
                name: 'Duong'
            }
            const res = await addDoc(chatRef, payload);
            setMessage('')
        } catch (error) {
            console.log(error)
        }
    }







  return (
    <div className='flex flex-row justify-between items-center'>
      <input 
        type="text"
        placeholder='Type a message'
        className='w-full h-10 rounded-l-md border border-slate-400 px-3 py-2 bg-slate-800'
        value={message}
        onChange={(e) => setMessage(e.target.value)}        
      />
      <div 
        onClick={(e) => handleSendMessage(e)}
      className='bg-pink-600 h-10 w-10 flex items-center justify-center rounded-r-md'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default SendMessage