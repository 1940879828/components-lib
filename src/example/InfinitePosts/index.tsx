import Button from "@/components/Button"
import { useEffect } from "react"
import {
  type InfiniteData,
  useInfiniteQuery,
  useQueryClient
} from "react-query"

type Post = {
  id: number
  title: string
  body: string
}

// 从 fetchPosts 的返回值中提取数据类型
type FetchPostsResult = Awaited<ReturnType<typeof fetchPosts>>

// 自动生成 useInfiniteQuery 数据类型
type InfiniteQueryData = InfiniteData<FetchPostsResult>

/** 获取分页数据 */
async function fetchPosts({ pageParam = 1 }: { pageParam?: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=3`
  )
  const data = await response.json()
  return { data, nextPage: pageParam + 1, hasMore: data.length > 0 }
}

const InfinitePosts = () => {
  const queryClient = useQueryClient()

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("infinitePosts", fetchPosts, {
      getNextPageParam: (lastPage) =>
        lastPage.hasMore ? lastPage.nextPage : undefined
    })

  // 模拟 WebSocket 接收最新数据
  useEffect(() => {
    const ws = new WebSocket("wss://example.com") // 模拟 WebSocket 连接（替换为真实接口）

    // 模拟接收最新数据
    ws.onmessage = (event) => {
      const newPost: Post = JSON.parse(event.data) // 假设 WebSocket 数据是单个新帖子

      // 将新数据合并到缓存中
      queryClient.setQueryData<InfiniteQueryData>(
        "infinitePosts",
        (oldData) => {
          // 如果 oldData 为空，则初始化默认数据
          if (!oldData) {
            return {
              pages: [
                { data: [newPost], nextPage: 2, hasMore: true } // 初始化第一页数据
              ],
              pageParams: []
            }
          }

          // 如果 oldData 存在，更新数据
          return {
            ...oldData,
            pages: [
              {
                data: [newPost, ...oldData.pages[0].data],
                nextPage: oldData.pages[0].nextPage + 1,
                hasMore: true
              }, // 将新数据插入第一页
              ...oldData.pages.slice(1) // 保留其余分页数据
            ]
          }
        }
      )
    }

    // 模拟 WebSocket 关闭
    return () => ws.close()
  }, [queryClient])

  if (error instanceof Error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Infinite Posts</h1>
      <ul>
        {data?.pages.map((page) =>
          page.data.map((post: Post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))
        )}
      </ul>
      <Button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
            ? "Load More"
            : "No More Posts"}
      </Button>
    </div>
  )
}

export default InfinitePosts
