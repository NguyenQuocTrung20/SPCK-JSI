import React from 'react'

const RewindReactState = (props) => {
  const { show, setShow, headerText, rate, place, getAnime, animeList, inputValue } = props

  console.log(animeList, 'animeList')

  const handleShow = () => {
    console.log('clicked')
    setShow(!show) // khi show là true => !show === false và ngược lại
    // nghĩa là cập nhật lại hàm ngược lại với giá trị ban đầu
  }


  // animeList include input value
  const filteredAnimeList = animeList.filter((anime) => { 
    return anime.animeTitle.toLowerCase().includes(inputValue.toLowerCase())
  })







  return (
    <div className=" w-full max-w-screen-xl flex flex-1 flex-col justify-center items-center overflow-y-auto py-4 overflow-x-auto px-8">
      {show ? (
        <div className="h-[450px] w-[400px] bg-red-200 rounded-lg text-white flex">
          <div
            aria-label="card-item-v2"
            className="flex flex-col w-[400px] p-5 shadow-sm rounded-lg"
          >
            <div className="relative flex-shrink-0 mb-5 h-[250px]">
              <img
                src="https://bit.ly/3zzCTUT"
                alt=""
                className="object-cover w-full h-full rounded-lg"
              />
              <div className="absolute z-10 px-4 py-2 rounded-lg text-cyan-500 right-5 top-5"></div>
            </div>
            <div className="flex items-center justify-between flex-1 gap-x-5">
              <div className="flex flex-col">
                <h3 className="mb-3 text-lg font-bold">{headerText}</h3>
                <div className="flex items-center gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-400">{place}</span>
                </div>
              </div>
              <div className="flex items-center p-3 bg-white gap-x-1 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-blue-600 font-semibold">{rate}</span>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <button
        onClick={handleShow}
        className="inline-flex items-center gap-2 justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] mt-4"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
        <span>{show ? 'Hide Modal' : 'Show Modal'}</span>
      </button>
        <div className='snap-x snap-mandatory flex flex-1 flex-col  justify-center items-center'>
        {
            animeList.length > 1 ? 
            filteredAnimeList.map((item, index) => { 
                return (
                    <div
                      key={index}
                      aria-label="card-item-v2"
                      className={`flex flex-col w-[400px] p-5 bg-white shadow-sm rounded-lg snap-center mt-4  `} 
                    >
                      <div className="relative flex-shrink-0 mb-5 h-[250px]">
                        <img
                          src={item.animeImg}
                          alt=""
                          className="object-cover w-full h-full rounded-lg"
                        />
                        <div className="absolute z-10 px-4 py-2 bg-white rounded-lg text-cyan-500 right-5 top-5">
                          
                        </div>
                      </div>
                      <div className="flex items-center justify-between flex-1 gap-x-5">
                        <div className="flex flex-col">
                          <h3 className="mb-3 text-lg font-bold">{item.animeTitle}</h3>
                          <div className="flex items-center gap-x-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-cyan-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-gray-400">{item.animeId}</span>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-gray-100 gap-x-1 rounded-xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span>{item.releasedDate}</span>
                        </div>
                      </div>
                    </div>
                )
            }) : null
        }
        </div>
      





      <button
        onClick={getAnime}
        className="rounded-lg font-medium bg-transparent border border-blue-500 text-blue-500 px-6 py-3 mt-4">
        Get anime
      </button>
    </div>
  )
}

export default RewindReactState
