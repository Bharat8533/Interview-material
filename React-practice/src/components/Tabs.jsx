import React from 'react'

const Tabs = ({tab, updateTab, index}) => {

  const handleUpdate = (key) => {
    updateTab(key, index)
  }

  return (
    <button onClick={() => handleUpdate(`${tab.name}`)} type='button' className={`border px-8 py-3 h-12 ${tab.status ? 'bg-green-700' : null} cursor-pointer`}>
      {tab.name}
    </button>
  )
}

export default Tabs
