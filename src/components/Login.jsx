import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleSubmit}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  )
}

export default Login
