import { Album } from 'pages/Album'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Routes as Router, Route } from 'react-router-dom'

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/album/:id" element={<Album />} />
    </Router>
  )
}
