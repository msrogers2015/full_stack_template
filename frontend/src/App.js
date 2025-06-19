import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useAuthStore } from './store/authStore'

function App() {
  const setCsrfToken = useAuthStore((state) => state.setCsrfToken)

  useEffect(() => {
    void setCsrfToken()
  }, [setCsrfToken])

  return (
    <div className="m-auto flex w-1/2 gap-2 p-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App