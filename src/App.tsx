import "./App.css"
import Accordion from "./components/Accordion"
import InfinitePosts from "@/example/InfinitePosts"
import PaginatedPosts from "@/example/PaginatedPosts"
import { getPosts } from "@/service"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import Button from "./components/Button"
import Dialog from "./components/Dialog"
import DropDown, {
  DropdownContent,
  DropdownTrigger
} from "./components/Dropdown"
import Paper from "./components/Paper/Paper.tsx"
import { RotateSwap, SwapOff, SwapOn } from "./components/Swap"
import Popover from "./components/Popover"
import ThemeController from "./components/ThemeController"
import { initTheme } from "./lib/theme.ts"

function App() {
  const [id, setId] = useState(1)

  const { data, isLoading } = useQuery(
    ["post", id],
    ({ queryKey }) => {
      const [, postId] = queryKey // 解构 queryKey 获取 id
      return getPosts(+postId)
    },
    {
      enabled: !!id // 当 id 存在时才执行查询
    }
  )

  const sendRequest = () => {
    setId((prevId) => prevId + 1)
  }

  useEffect(() => {
    console.log({ data })
  }, [data])

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <div className="p-2">
      <div className="flex gap-2">
        <PaginatedPosts />
        <InfinitePosts />
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
        <div className="flex flex-col gap-2">
          <h3>user</h3>
          <p>userId:{data?.id}</p>
          <p>id:{data?.id}</p>
          <p>title:{data?.title}</p>
          <p>body:{data?.body}</p>
          {isLoading && <p>loading...</p>}
          <Button onClick={sendRequest}>send request</Button>
        </div>
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
