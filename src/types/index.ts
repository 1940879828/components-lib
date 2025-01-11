type API = {
  /** add post */
  "/posts": {
    params: {
      title: string
      body: string
      userId: number
    }
    data: {
      id: number
      title: string
      body: string
      userId: number
    }
  }
}

export default API
