import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useSongsData = create(
    persist(
        (set) => ({
            songs: [],
            loading : false,
            modalVisible: false,
            editModalVisible: false,
            selectedItem : {},

            setSongs: (songs) => set({ songs }),
            setLoading: (loading) => set({ loading }),
            setModalVisible: () => set((state) => ({ modalVisible: !state.modalVisible })),
            setEditModalVisible: () => set((state) => ({ editModalVisible: !state.editModalVisible })),
            setSelectedItem: (selectedItem) => set({ selectedItem }),
        }),
        {
          name: 'useSongsData', // unique name
          storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
      )
)