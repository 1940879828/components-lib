import type API from "@/types"
import { http, request } from "./http"

/** 添加用户 */
export async function addPost(query: API["/posts"]["params"]) {
  return await http.post("/posts", query)
}

type Post = {
  userId: number
  id: number
  title: string
  body: string
}
/** 获取文章 */
export async function getPosts(id: number) {
  const { data } = await request<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  return data
}

/** 获取分页文章数据 */
export async function fetchPosts(page: number, limit: number): Promise<Post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  )
  return response.json()
}
