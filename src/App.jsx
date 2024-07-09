import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <UserContextProvider>
        <h1 className="text-4xl font-bold mb-6">Context API</h1>
        <div className="w-full max-w-md space-y-4">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </div>
  )
}

export default App
