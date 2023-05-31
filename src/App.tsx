import { Route, Router, Routes } from "@solidjs/router"
import { lazy } from "solid-js"

const Home = lazy(() => import("./pages/home/Home"))
const Contact = lazy(() => import("./pages/contact/Contact"))

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  )
}

export default App
