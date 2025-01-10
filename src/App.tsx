import "./App.css"
import { useEffect } from "react"
import Button from "./components/Button"
import DropDown, {
  DropdownContent,
  DropdownTrigger
} from "./components/Dropdown"
import Paper from "./components/Paper/Paper.tsx"
import Popover from "./components/Popover"
import ThemeController from "./components/ThemeController"
import { initTheme } from "./lib/theme.ts"

function App() {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <ThemeController className="w-8 h-8" />
        <Button
          variant="neutral"
          shape="square"
          size="lg"
          className="text-sm bg-custom"
        >
          neutral
        </Button>
        <Button variant="primary" shape="circle" size="lg" className="text-sm">
          primary
        </Button>
        <Button variant="secondary" size="xs">
          secondary
        </Button>
        <Button variant="accent" size="sm">
          accent
        </Button>
        <Button variant="success" size="md">
          success
        </Button>
        <Button variant="info" size="lg">
          info
        </Button>
        <Button variant="warning">warning</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="error">error</Button>
      </div>
      <div className="flex gap-2 pl-20 pt-20">
        <DropDown variant="top">
          <DropdownTrigger>
            <Button>top</Button>
          </DropdownTrigger>
          <DropdownContent>
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
          </DropdownContent>
        </DropDown>
        <DropDown variant="left">
          <DropdownTrigger>
            <Button>left</Button>
          </DropdownTrigger>
          <DropdownContent>
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
          </DropdownContent>
        </DropDown>
        <DropDown variant="right">
          <DropdownTrigger>
            <Button>right</Button>
          </DropdownTrigger>
          <DropdownContent>
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
          </DropdownContent>
        </DropDown>
        <DropDown variant="bottomEnd">
          <DropdownTrigger>
            <Button>bottomEnd</Button>
          </DropdownTrigger>
          <DropdownContent>
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
          </DropdownContent>
        </DropDown>
        <DropDown variant="bottom" trigger="hover">
          <DropdownTrigger>
            <Button>bottom hover</Button>
          </DropdownTrigger>
          <DropdownContent>
            <li>
              <p>Item 1</p>
            </li>
            <li>
              <p>Item 2</p>
            </li>
          </DropdownContent>
        </DropDown>
      </div>
      <div className="flex gap-2 pl-2 flex-wrap pt-2">
        {[...Array(25).keys()].map((_, i) => (
          <Paper
            key={i}
            elevation={i}
            className="w-24 h-24 flex gap-2 justify-center items-center"
          >
            {i}
          </Paper>
        ))}
      </div>
      <div className="flex gap-2 pl-20 pt-20">
        <Popover placement="top" overlay={<>321</>}>
          <Button variant="outline">
            hover popover
          </Button>
        </Popover>
      </div>
    </div>
  )
}

export default App
