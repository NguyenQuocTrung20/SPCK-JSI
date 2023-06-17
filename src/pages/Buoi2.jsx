import axios from 'axios'
import React, {useState, useEffect} from 'react'



const Buoi2 = () => {

    const [config, setConfig] = useState({
        limit : 10,
        offset : 0
    })


    const [pokeData, setPokeData] = useState([])

    const BASE_URL = `https://pokeapi.co/api/v2/ability/?limit=${config.limit}&offset=${config.offset}`


    const handleGetPokeData = async () => {
        const res = await axios.get(BASE_URL)
        const allPokes = res.data.results
        console.log('allPokes', allPokes)
        
    }

    useEffect(
        () => {
        console.log('offset ban đầu', config.offset)
            handleGetPokeData()
        }, [config.offset]  // thay đổi offset từ 0 đến 1 giá trị bất kì => effect được gọi lại
    )


    // khi hàm handleGetPokeData được gọi, thì sẽ render ra các con list con poke khác nhau

    const handleNextPage = () => {
        setConfig({
            ...config,
            offset : config.offset + 10
        })
        console.log('offset sau khi thay đổi', config.offset)

    }





  return (
    <div>
        <div>
            <h1 className='text-4xl text-center font-pacifico'>Buổi 2</h1>
        </div>
        <button
          className="inline-flex items-center justify-center px-10 text-white bg-blue-500 rounded-lg h-14 gap-x-3 active:bg-red-600 focus:outline-none"
          aria-label="button-loading"
          onClick={handleNextPage}
        >
          <div className="w-6 h-6 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
          <span>Load more</span>
        </button>
    </div>
  )
}

export default Buoi2


// Buổi 2 : học về hook useEffect để quản lí các side effect xung quanh ứng dụng của mình

// side effect là gì ?

// Side Effect trong React là một tính năng cho phép bạn thực hiện các hoạt động bên ngoài component, ví dụ như gửi yêu cầu HTTP, đọc hoặc ghi vào local storage, hoặc sử dụng API của trình duyệt. Chúng ta sử dụng hook useEffect để quản lý side effect trong React.

// useEffect là gì ?

// useEffect là một hook trong React, cho phép bạn thực hiện các side effect (hoạt động bên ngoài component) trong một component. Hook useEffect giúp bạn quản lý việc thay đổi dữ liệu và cập nhật giao diện tương ứng. Chúng ta có thể sử dụng useEffect để gọi API, đọc hoặc ghi vào local storage, hoặc thực hiện bất kỳ hoạt động nào cần thiết để cập nhật component khi dữ liệu thay đổi.


// useEffect sẽ có 3 dạng chính

// dạng 1 : không có dependency array đi kèm : hành động effect được gọi liên tục sau mỗi lần render
// liên tưởng đến : giống setInterval với delayTime = 0

// dạng 2 : có dependency array đi kèm, nhưng array rỗng : render duy 1 nhất 1 lần
// dạng 3 : có dependency array đi kèm, nhưng array có giá trị : render lại mỗi khi giá trị trong
// array dependency thay đổi

// buổi 3 : làm tính năng : khi kéo xuống sẽ lấy thêm data mà không quản lí