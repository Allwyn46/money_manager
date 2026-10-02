import axios from "axios"

export const instance = axios.create({
  baseURL: "https://api.example.com", // replace with your backend URL
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
})

export type Category = {
  id: string
  name: string
}

export const addCategory = async (name: string): Promise<Category> => {
  const { data } = await instance.post<Category>("/categories", { name })
  return data
}
