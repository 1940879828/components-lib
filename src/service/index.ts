import type API from "@/types"
import { http, request } from "./http"

/** 添加用户 */
export async function addPost(query: API["/posts"]["params"]) {
  return await http.post("/posts", query)
}

type GetPostsReturn = {
  userId: number
  id: number
  title: string
  body: string
}
/** 获取用户 */
export async function getPosts(id: number) {
  const { data } = await request<GetPostsReturn>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  return data
}
