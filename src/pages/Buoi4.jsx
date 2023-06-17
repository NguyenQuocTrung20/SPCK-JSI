import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useAuthStore } from '../zustandStore/AuthStore'
import Avatar from '../components/profile/Avatar'
import SearchInput from '../components/SearchInput'


const Buoi4 = () => {
    const [avatarUrl, setAvatarUrl] = useState('')

    const userInfo = useAuthStore(state => state.userInfo)
    const setUserInfo = useAuthStore(state => state.setUserInfo)











    const renderProduct = () => {
        return ListProducts?.products.map((item) => {
            return (
                <div key={item.id}>
                    <p>{item.category}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.title}</p>
                    <img src={item.image} />
                </div>
            )
        })
    }

    const updateAvatar = (e) => {
      e.preventDefault()
        const newProfileData = {
            ...userInfo,
            profileImageUrl : avatarUrl,
            active : !userInfo.active
        }

        setUserInfo(newProfileData)
    }




  return (
    <div className="flex flex-col justify-center items-center flex-1 max-h-screen max-w-5xl mx-auto bg-red-200">
      <Avatar />
      <div className='flex gap-x-4 items-center justify-center'>
      <SearchInput 
        inputValue={avatarUrl}
        setInputValue={setAvatarUrl}
      
      />
      <button 
        onClick={(e) => updateAvatar(e)}
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Update Avatar</button>
      </div>
     
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
        {userInfo.displayName}
      </h1>
      

      {/* <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
      
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          Increase by 1
        </button>
        <button
          type="button"
       
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
          Reset
        </button>
        <button
          type="button"
    
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
              clipRule="evenodd"
            ></path>
          </svg>
          Decrease by 1
        </button>
      </div> */}


    {/* { ListProducts.products.length !==0 &&
    renderProduct()} */}




    </div>
  )
}

export default Buoi4
