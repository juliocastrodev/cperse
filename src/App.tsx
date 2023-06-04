import { Route, Router, Routes } from "@solidjs/router"
import { lazy } from "solid-js"
import { PATHS } from "./shared/routing/paths-config"

const Home = lazy(() => import("./pages/home/Home"))
const Contact = lazy(() => import("./pages/contact/Contact"))
const AboutMe = lazy(() => import("./pages/about-me/AboutMe"))

const App = () => {
  return (
    <Router base="/cperse">
      <Routes>
        <Route path={PATHS.CONTACT} component={Contact} />
        <Route path={PATHS.ABOUT_ME} component={AboutMe} />
        <Route path={PATHS.HOME} component={Home} />
      </Routes>
    </Router>
  )
}

export default App
