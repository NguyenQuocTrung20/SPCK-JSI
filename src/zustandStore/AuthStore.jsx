import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuthStore = create(
  persist(
    (set) => ({
      // stateName
      userInfo: {
        displayName: '',
        email: '',
        password: '',
        profileImageUrl: '',
        accessToken: '',
        active: false,
      },
      // function to update value of stateName
      // upadateUserInfo
      setUserInfo: (userInfo) =>
        set((previousState) => ({
          userInfo: {
            ...previousState.userInfo,
            ...userInfo,
          },
        })),
    }),
    {
      name: 'userInfoStorage', // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
