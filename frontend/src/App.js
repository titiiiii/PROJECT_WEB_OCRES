import React from "react"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Affichage from "./components/Affichage"

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return code ? <Dashboard code={code} /> : <Login />

}

export default App