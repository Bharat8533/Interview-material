import React, { useEffect, useState } from 'react'
import Tabs from './components/Tabs'
import Profile from './components/Profile'
import Interest from './components/Interest'
import Setting from './components/Setting'

const App = () => {
  const [AllHeaders, setAllHeaders] = useState([
    { name: 'Profile', status: true },
    { name: 'Interest', status: false },
    { name: 'Setting', status: false }
  ]);

  const updateTab = (key, index) => {
    const newArr = AllHeaders.map((tab) => {
      return tab.name == key
        ? { ...tab, status: !tab.status }
        : { ...tab, status: false };
    })
    setAllHeaders(newArr);
    setOpenWin(index)
  }

  const [openWin, setOpenWin] = useState(0);

  const renderUi = () => {
    return AllHeaders.map((tab, i) => {
      return (<Tabs key={i} tab={tab} updateTab={updateTab} index={i} />)
    })
  }

  const [data, setData] = useState({
    name: 'Bharat',
    age: 22,
    email: 'bharat@gmail.com',
    interest: ["Dance", "Music", 'Singing'],
    theme: true
  })


  const updateData = (name, value) => {
    setData((data) => ({...data, [name] : value}))
}

return (
  <div className='w-full min-h-screen flex justify-center p-12'>
    <div className='w-3/4 mx-auto'>
      <div className='flex gap-2 '>
        {
          renderUi()
        }
      </div>
      <div>
        {
          openWin == 0 ? <Profile data={data} setData={updateData} />
            : (openWin == 1 ? <Interest data={data} setData={updateData} />
              : <Setting data={data} setData={updateData} />)
        }
      </div>
    </div>
  </div>
)
}

export default App
