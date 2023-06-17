import React, { useEffect, useState } from "react";
import {
  db,
  SONGS_COLLECTION,
  PLAYERS_COLLECTION,
} from "../../firebase/firebase.config";
import { useSongsData } from "../../zustandStore/useSongsData";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  deleteField,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import SongsCard from "./SongsCard";
import ShoppingCard from "../../pages/cart/ShoppingCard";
import ProductView from "../product/ProductView";
import ChatPopup from "../chat-popup/ChatPopup";
import { useCartData } from "../../zustandStore/useCartData";

const SongsCollections = () => {
  const [addSong, setAddSong] = useState({
    name: "",
    album: "",
    singer: "",
    imgUrl: "",
    release: "",
  });
  const { isPopupOpen } = useCartData();

  const {
    songs,
    setSongs,
    loading,
    setLoading,
    modalVisible,
    setModalVisible,
    editModalVisible,
    setEditModalVisible,
    selectedItem,
    setSelectedItem,
  } = useSongsData();

  // de query dc data tu firestore, thi minh phai dung cac function build-in cua firebase chu k phai la cac
  // ham call API binh thuong

  const songRefs = collection(db, SONGS_COLLECTION);

  // get song Data from firestore

  const getSongData = async () => {
    setLoading(true);
    const songsDocument = await getDocs(songRefs);
    const songsData = songsDocument.docs.map((doc) => doc.data());
    const collectionId = songsDocument.docs.map((doc) => doc.id);
    const songsDataWithId = songsData.map((item, index) => {
      return {
        ...item,
        id: collectionId[index],
      };
    });
    if (songsDataWithId) {
      setSongs(songsDataWithId);
      setLoading(false);
    } else {
      setSongs([]);
      setLoading(false);
    }
  };

  const addNewSong = async (e) => {
    e.preventDefault();
    try {
      const result = await addDoc(songRefs, addSong);
      if (result) {
        getSongData();
        setAddSong({
          name: "",
          album: "",
          singer: "",
          imgUrl: "",
          release: "",
        });
        setModalVisible();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteSong = async (e) => {
    e.preventDefault();
    try {
      await deleteDoc(doc(db, SONGS_COLLECTION, selectedItem.id));
      getSongData();
      setEditModalVisible();
    } catch (error) {
      alert(error.message);
    }
  };

  const updateData = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, SONGS_COLLECTION, selectedItem.id), {
        name: selectedItem.name,
        album: selectedItem.album,
        singer: selectedItem.singer,
        imgUrl: selectedItem.imgUrl,
        release: selectedItem.release,
      });
      getSongData();
      setSelectedItem({
        name: "",
        album: "",
        singer: "",
        imgUrl: "",
        release: "",
      });
      setEditModalVisible();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getSongData();
    return () => {
      setSongs([]);
    };
  }, []);

  if (loading) {
    return (
      <>
        <div
          aria-label="loading-skeleton"
          className="w-full h-full bg-slate-200 animate-pulse"
        >
          Loading...
        </div>
      </>
    );
  }

  const renderModal = () => {
    return (
      <>
        {modalVisible && (
          <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  onClick={() => {
                    setModalVisible();
                    setAddSong({
                      name: "",
                      album: "",
                      singer: "",
                      imgUrl: "",
                      release: "",
                    });
                  }}
                  className="absolute inset-0 bg-gray-900 opacity-75"
                />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>
              <div
                className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <label>Song name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song name"
                    value={addSong.name}
                    onChange={(e) =>
                      setAddSong({ ...addSong, name: e.target.value })
                    }
                  />
                  <label>Singer</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song singer"
                    value={addSong.singer}
                    onChange={(e) =>
                      setAddSong({ ...addSong, singer: e.target.value })
                    }
                  />
                  <label>Album</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song album"
                    value={addSong.album}
                    onChange={(e) =>
                      setAddSong({ ...addSong, album: e.target.value })
                    }
                  />
                  <label>Image Url</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song image Url"
                    value={addSong.imgUrl}
                    onChange={(e) =>
                      setAddSong({ ...addSong, imgUrl: e.target.value })
                    }
                  />
                  <label>Release At</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter release at"
                    value={addSong.release}
                    onChange={(e) =>
                      setAddSong({ ...addSong, release: e.target.value })
                    }
                  />
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right">
                  <button
                    onClick={() => {
                      setModalVisible();
                      setAddSong({
                        name: "",
                        album: "",
                        singer: "",
                        imgUrl: "",
                        release: "",
                      });
                    }}
                    type="button"
                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={(e) => addNewSong(e)}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  >
                    Create new item
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderEditModal = () => {
    return (
      <>
        {editModalVisible && (
          <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div
                  onClick={() => {
                    setEditModalVisible();
                    setAddSong({
                      name: "",
                      album: "",
                      singer: "",
                      imgUrl: "",
                      release: "",
                    });
                  }}
                  className="absolute inset-0 bg-gray-900 opacity-75"
                />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>
              <div
                className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <label>Song Id</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song name"
                    value={selectedItem.id}
                    disabled
                  />
                  <label>Song name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song name"
                    value={selectedItem.name}
                    onChange={(e) =>
                      setSelectedItem({ ...selectedItem, name: e.target.value })
                    }
                  />
                  <label>Singer</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song singer"
                    value={selectedItem.singer}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        singer: e.target.value,
                      })
                    }
                  />
                  <label>Album</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song album"
                    value={selectedItem.album}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        album: e.target.value,
                      })
                    }
                  />
                  <label>Image Url</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter song image Url"
                    value={selectedItem.imgUrl}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        imgUrl: e.target.value,
                      })
                    }
                  />
                  <label>Release At</label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3 rounded-lg outline-none"
                    placeholder="Enter release at"
                    value={selectedItem.release}
                    onChange={(e) =>
                      setSelectedItem({
                        ...selectedItem,
                        release: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={(e) => deleteSong(e)}
                    className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-400 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setEditModalVisible();
                      setSelectedItem({
                        id: "",
                        name: "",
                        album: "",
                        singer: "",
                        imgUrl: "",
                        release: "",
                      });
                    }}
                    type="button"
                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={(e) => updateData(e)}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  >
                    Update item
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="h-full w-full justify-start items-center py-4 bg-white">
      <div className="flex flex-1 flex-col justify-center items-center p-4">
        <div className="flex flex-1 xl:h-[75%] flex-col justify-center items-center xl:w-[80%]">
          <h1 className="xl:text-4xl text-[22px] font-bold mb-2">Songs</h1>
          <div className="flex justify-center items-center xl:w-full  rounded-md overflow-x-auto  scrollbar-hide snap-x xl:h-full h-[312px] w-[256px] ">
            <div className="flex xl:flex-row flex-col gap-y-4">
              {songs?.map((item, index) => (
                <SongsCard key={index} songs={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col h-full w-full items-center justify-center mt-4">
          <h1 className="text-2xl font-bold">All Product</h1>
          <div className="flex mt-4 mb-12 justify-center items-center w-full z-10">
            <ProductView />
          </div>
        </div>
      </div>

      <div
        onClick={setModalVisible}
        className="absolute bottom-4 right-10 px-4 py-3 transition-all duration-300 ease-in-out
             bg-blue-400 rounded-xl text-white active:bg-blue-600 cursor-pointer"
      >
        Add new collection
      </div>

      {renderModal()}
      {renderEditModal()}

      <ShoppingCard />
      {isPopupOpen && <ChatPopup />}
    </div>
  );
};

export default SongsCollections;
