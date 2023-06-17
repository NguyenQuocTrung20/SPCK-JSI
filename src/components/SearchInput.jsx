import React, {useState} from 'react'


const SearchInput = (props) => {
    const {inputValue, setInputValue} = props

  
    // console.log('seachValue', inputValue)

  return (
        <div className="flex items-center gap-5 w-[300px] border border-red-400 rounded-lg px-5 py-4 justify-center mt-4">
          <span className="flex-shrink-0 text-gray-500">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Search Somethings..."
            value={inputValue}
            onChange= {(e) => setInputValue(e.target.value)}
          />
        </div>
  )
}

export default SearchInput