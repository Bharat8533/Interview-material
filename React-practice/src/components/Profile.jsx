import React from 'react'

const Profile = ({ data, setData }) => {
  const handleChange = (e) => {
    setData(e.target.name, e.target.value)
  }
  return (
    <div className='h-96 mt-4 w-full border p-8'>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" id='name' value={data.name} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor="name">Age : </label>
        <input type="number" name="age" id='name' value={data.age} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor="name">Email : </label>
        <input type="email" name="email" id='name' value={data.email} onChange={(e) => handleChange(e)} />
      </div>
    </div>
  )
}

export default Profile
