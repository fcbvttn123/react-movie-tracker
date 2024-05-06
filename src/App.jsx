import { Login } from "./pages/auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { AuthCheck } from "./components/AuthCheck"

function App() {
  localStorage.setItem("auth", true)
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route element={<AuthCheck />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
