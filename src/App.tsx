import "./App.css"
import { useEffect } from "react"
import { themeChange } from "theme-change"
import Button from "./components/Button";

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <Button variant="neutral" shape="square" size="lg" className="text-sm text-primary">neutral</Button>
        <Button variant="primary" shape="circle" size="lg" className="text-sm">primary</Button>
        <Button variant="secondary" size="xs">secondary</Button>
        <Button variant="accent" size="sm">accent</Button>
        <Button variant="success" size="md">success</Button>
        <Button variant="info" size="lg">info</Button>
        <Button variant="warning">warning</Button>
        <Button variant="ghost" >ghost</Button>
        <Button variant="error">error</Button>
      </div>
    </div>
  )
}

export default App
