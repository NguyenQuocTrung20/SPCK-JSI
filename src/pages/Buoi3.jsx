import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Buoi3 = () => {
  const [datas, setDatas] = useState([])

  const [config, setConfig] = useState({
    currentName: 'Products',
    offset: 0,
    limit: 10,
  })

  const [list, setList] = useState([
    {
      id: 1,
      name: 'Products',
      activeTab: true,
    },
    {
      id: 2,
      name: 'Categories',
      activeTab: false,
    },
    {
      id: 3,
      name: 'Users',
      activeTab: false,
    },
  ])

  const getAPI_URL = (name) => {
    switch (name) {
        case 'Products':
            return `https://api.escuelajs.co/api/v1/${name.toLowerCase()}?offset=${config.offset}&limit=${config.limit}`
        case 'Categories':
            return `https://api.escuelajs.co/api/v1/${name.toLowerCase()}`
        case 'Users':
            return `https://api.escuelajs.co/api/v1/${name.toLowerCase()}`
        default:
            return `https://api.escuelajs.co/api/v1/${config.currentName.toLowerCase()}?offset=${config.offset}&limit=${config.limit}`
     }
  }

  const handleGetData = async () => {
    const res = await axios.get(getAPI_URL())
    const data = res.data
    setDatas(data)
  }

  useEffect(() => {
    handleGetData()
  }, [config.offset, config.currentName])

  const handleActiveTab = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          activeTab: true,
        }
      } else {
        return {
          ...item,
          activeTab: false,
        }
      }
    })
    setList(newList)
  }

  const renderTab = () => {
    return (
      <div className="flex min-w-[300px] rounded-full whitespace-nowrap overflow-x-auto gap-x-3">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                handleActiveTab(item.id)
                setConfig({
                  ...config,
                  currentName: item.name,
                })
              }}
              className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 cursor-pointer"
            >
              <p
                className={`inline-block px-4 py-3 ${
                  item.activeTab ? 'text-white' : 'text-[#1C315E]'
                } ${
                  item.activeTab ? 'bg-blue-600' : 'bg-blue-300'
                } rounded-lg active`}
                aria-current="page"
              >
                {item.name}
              </p>
            </div>
          )
        })}
        {/* <div className="flex items-center gap-x-3 cursor-pointer py-3 px-6 text-sm font-medium rounded-lg border border-gray-100 overflow-hidden">
                Products
              </div>
              <div className="flex items-center gap-x-3 cursor-pointer py-3 px-6 text-sm font-medium rounded-lg  bg-blue-500 text-white overflow-hidden">
                Categories
              </div>
              <div className="flex items-center gap-x-3 cursor-pointer py-3 px-6 text-sm font-medium rounded-lg border border-gray-100 overflow-hidden">
                Users
              </div> */}
      </div>
    )
  }

  return (
    <div className="flex flex-1 h-screen w-screen bg-red-200 flex-col pb-4">
      <div className="h-[60px] mt-4 flex mx-auto items-start">
        {renderTab()}
      </div>
      <div className="mx-4 flex flex-1 items-center justify-center flex-col overflow-auto h-[500px] px-2 ">
        <div className="gap-y-4 flex flex-col h-full  rounded-md">
          {datas.map((item, index) => {
            return <Card key={index} allItems={item} currentName = {config.currentName} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Buoi3
