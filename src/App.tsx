import "./App.css"
import { useEffect } from "react"
import { themeChange } from "theme-change"

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <button className="btn btn-primary" type="button" data-set-theme="light" data-act-class="ACTIVECLASS">
        light
      </button>
      <button className="btn btn-primary" type="button" data-set-theme="dark" data-act-class="ACTIVECLASS">
        dark
      </button>
      <br/>
      <button className="btn btn-primary btn-info">Info</button>
      <button className="btn btn-primary btn-success">Success</button>
      <button className="btn btn-primary btn-warning">Warning</button>
      <button className="btn btn-primary btn-error">Error</button>
    </>
  )
}

export default App
