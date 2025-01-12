import Button from "@/components/Button"
import { fetchPosts } from "@/service"
import { useState } from "react"
import { useQuery } from "react-query"

const PaginatedPosts = () => {
  const [page, setPage] = useState(1)
  const limit = 3

  // 使用 useQuery 处理分页数据
  const {
    data,
    error,
    isLoading,
    isPreviousData // 当分页数据尚未更新时为 true
  } = useQuery(
    ["posts", page], // queryKey 包含分页信息
    () => fetchPosts(page, limit),
    {
      keepPreviousData: true, // 保留上一页数据，避免空白加载
      staleTime: 5000 // 数据过期时间
    }
  )

  if (isLoading) return <p>Loading...</p>
  if (error instanceof Error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h1>Paginated Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <strong>title: {post.title}</strong>
            <p>body: {post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <Button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1 || isPreviousData}
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage((old) => old + 1)}
          disabled={isPreviousData || (data && data.length < limit)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default PaginatedPosts
