import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "./assets/style/main.css"

import { HomePage } from "./pages/HomePage"
import { AboutUs } from "./pages/AboutUs"
import { store } from "./store/store"
import { ContactDetails } from "../src/pages/contactDetails"
import { ContactIndex } from "./pages/ContactIndex"
import { EditContact } from "./pages/EditContact"
import { AppFooter } from "./cmps/AppFooter"
import { AppHeader } from "./cmps/AppHeader"

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-layout app">
          <AppHeader />
          <main>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about" />
              <Route element={<ContactIndex />} path="/contact" />
              <Route element={<ContactDetails />} path="/contact/:contactId" />
              <Route element={<EditContact />} path="/edit/:contactId" />
            </Routes>
          </main>
          <AppFooter />
        </section>
      </Router>
    </Provider>
  )
}
