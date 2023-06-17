import axios from 'axios'
import React, { useState} from 'react'
import RewindReactState from '../components/RewindReactState'
import SearchInput from '../components/SearchInput'

const HomePage = () => {
    const [show, setShow] = useState(false)
    const [popularAnime, setPopularAnime] = useState([])
    const [inputValue, setInputValue] = useState('')

    const API_URL = 'https://gogoanime.consumet.org/popular'

    const getAnime = async () => {
        const response = await axios.get(API_URL)
        setPopularAnime(response.data)
    }
    


    


  return (
    <div className='flex flex-1 flex-col h-auto min-h-screen w-full justify-center items-center overflow-y-auto'>
        <SearchInput
            inputValue = {inputValue}
            setInputValue={setInputValue}
        />
        <RewindReactState 
            show={show}
            setShow={setShow}
            headerText = 'Ôn tập lại Props và States'
            rate ={10}
            place={'Paris, France'}
            getAnime = {getAnime}
            animeList = {popularAnime}
            inputValue={inputValue}
        />
    </div>
  )
}

export default HomePage



// props : còn được gọi là propreties, là các thuộc tính của component (cpn)
// props : có dạng propsName = {value}
// props thường được truyền từ cpn cha => cpn con, tuy nhiên cũng có các trường hợp ngược lại ( cpn con=> cha thì cần1 hàm callback)
// props không thể tự thay đổi chính nó ( giống như từ khoá const, nó không có khả năng khai báo lại nó ) nhưng có khả năng cập nhật lại giá trị
// khi cpn cha truyền xuống cpn con có sự thay đổi, cpn con sẽ tự động render lại