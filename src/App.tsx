import { Route, Router, Routes } from "@solidjs/router"
import { lazy } from "solid-js"

const Home = lazy(() => import("./pages/home/Home"))
const Contact = lazy(() => import("./pages/contact/Contact"))
const AboutMe = lazy(() => import("./pages/about-me/AboutMe"))

const App = () => {
  return (
    <Router base="/cperse">
      <Routes>
        <Route path="/contact" component={Contact} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/" component={Home} />
      </Routes>
    </Router>
  )
}

export default App
