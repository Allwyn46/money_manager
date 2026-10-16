import type {
  Account,
  Category,
  Expense,
  expenseFormFields,
  Transaction,
} from "@/lib/types"
import axios from "axios"

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000", // replace with your backend URL
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
})

export const addCategory = async (category_name: string): Promise<Category> => {
  const { data } = await instance.post<Category>("/category", { category_name })
  return data
}

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await instance.get<Category[]>("/category")
  return data
}

export const addAccount = async (account_name: string): Promise<Account> => {
  const { data } = await instance.post<Account>("/account", { account_name })
  return data
}

export const getAccounts = async (): Promise<Account[]> => {
  const { data } = await instance.get<Account[]>("/account")
  return data
}

export const addExpense = async (
  payload: expenseFormFields
): Promise<Expense> => {
  const { data } = await instance.post<Expense>("/expense", payload)
  return data
}

export const getTransactions = async (): Promise<Transaction[]> => {
  const { data } = await instance.get<Transaction[]>("/transactions")
  return data
}
