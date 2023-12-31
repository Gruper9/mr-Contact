import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "./assets/style/main.css"

import { HomePage } from "./pages/HomePage"
import { AboutUs } from "./pages/AboutUs"
import { store } from "./store/store"
import { ContactDetails } from "../src/pages/contactDetails"

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <main>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<ContactDetails />} path="/contact/:contactId" />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}
