import React, { useState, useEffect, useRef } from "react";
import { useCartData } from "../../zustandStore/useCartData";
import SendMessage from "./SendMessage";
import ChatItem from "./ChatItem";
import { db, CHAT_ROOM } from "../../firebase/firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

// query : la cu phap truy van nang cao nhan ve 2 tham so chinh : chatRef = collection(db, 'key-query')
// orderBy : sap xep data theo quy dinh cua user
// onSnapshot : lang nghe su thay doi cua data lien tuc (realtime)

const ChatPopup = () => {
  const { setIsPopupOpen, isPopupOpen } = useCartData();
  const [isLoading, setIsLoading] = useState(false);
  const [listChat, setListChat] = useState([]);
  const chatRef = collection(db, CHAT_ROOM);
  const srollToLastMessage = useRef();

  const handleGetChat = async () => {
    try {
      setIsLoading(true);
      const res = await getDocs(chatRef);
      const collectionData = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setListChat(collectionData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScrollToLastMessage = () => {
    srollToLastMessage.current?.scrollIntoView({ 
        behavior: "smooth",
    })
  }


  useEffect(() => {
    handleGetChat();
    const continueGetChat = onSnapshot(
      query(chatRef, orderBy("createdAt")),
      (allChat) => {
        const collectionData = allChat.docs.map((doc) => ({
          ...doc.data(),
          doc_id: doc.id,
        }));
        setListChat(collectionData);
      }
    );
    return continueGetChat;
  }, [isPopupOpen]);

  useEffect(() => {
    handleScrollToLastMessage();
  }, [listChat]);

  const isMe = listChat.map((item) => item.id === 1 );






  return (
    <div className="w-[320px] h-[460px] bg-slate-800 absolute right-6 bottom-10 rounded-md z-50 px-2 py-3">
      <div
        onClick={setIsPopupOpen}
        className="h-4 w-full flex flex-1 justify-between items-center pr-2 py-2"
      >
       <div>
         Chat with admin
       </div>
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="border-t border-slate-400 mt-3 h-5/6 w-full overflow-y-auto rounded-md">
        <div className="h-auto min-h-[360px] bg-base w-full">
          {isLoading && (
            <div className="flex flex-1 justify-center items-center text-lg mt-4">
              Loading ...
            </div>
          )}
          {listChat?.map((item, index) => {
            return <ChatItem {...item} key={index} />;
          })}
          <p ref={srollToLastMessage} />
        </div>
      </div>
      <div className="mt-2">
        <SendMessage />
      </div>
    </div>
  );
};

export default ChatPopup;
