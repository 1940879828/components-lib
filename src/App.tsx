import "./App.css"
import Carousel from "@/components/Carousel"
import { TimeDisplay } from "@/components/CountDown"
import { useEffect } from "react"
import Accordion from "./components/Accordion"
import Button from "./components/Button"
import Dialog from "./components/Dialog"
import DropDown, {
  DropdownContent,
  DropdownTrigger
} from "./components/Dropdown"
import Paper from "./components/Paper/Paper.tsx"
import Popover from "./components/Popover"
import { RotateSwap, SwapOff, SwapOn } from "./components/Swap"
import ThemeController from "./components/ThemeController"
import { initTheme } from "./lib/theme.ts"

function App() {
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <div className="p-2">
      <div className="flex gap-2 w-5/12 ml-20">
        <TimeDisplay />
      </div>
      <div className="flex gap-2 w-5/12 ml-20">
        <Carousel
          list={[
            <img
              key="0"
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />,
            <img
              key="1"
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />,
            <img
              key="2"
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />,
            <img
              key="3"
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
          ]}
        />
      </div>
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
          <Button variant="outline">hover popover</Button>
        </Popover>
      </div>
      <div className="flex gap-2 pl-2 flex-wrap pt-2">
        <Dialog
          title={<h3 className="font-bold text-lg">Hello!</h3>}
          content={
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
          }
          actions={
            <form method="dialog">
              <Button variant="primary">Close</Button>
            </form>
          }
        />
        <RotateSwap
          onChange={(v) => {
            console.log(v)
          }}
        >
          <SwapOn className="text-4xl">😈</SwapOn>
          <SwapOff className="text-4xl">😇</SwapOff>
        </RotateSwap>
        <RotateSwap
          onChange={(v) => {
            console.log(v)
          }}
          variant="flip"
        >
          <SwapOn className="text-4xl">🥵</SwapOn>
          <SwapOff className="text-4xl">🥶</SwapOff>
        </RotateSwap>
        <Accordion
          data={[
            {
              label: "title1",
              value: "value1"
            },
            {
              label: "title2",
              value: "value2"
            },
            {
              label: "title3",
              value: "value3"
            }
          ]}
        />
      </div>
    </div>
  )
}

export default App
