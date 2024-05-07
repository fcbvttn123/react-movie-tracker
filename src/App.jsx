import { Login } from "./pages/auth/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import {TVShows} from "./pages/home/TVShows"
import {Movies} from "./pages/home/Movies"
import {MyList} from "./pages/home/MyList"
import { AuthCheck } from "./components/AuthCheck"
import { Layout } from "./pages/home/Layout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<AuthCheck />}>
          <Route path="/" element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path="tvshows" element={<TVShows />} />
            <Route path="movies" element={<Movies />} />
            <Route path="mylist" element={<MyList />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
