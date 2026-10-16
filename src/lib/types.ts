export type openCloseProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export type expenseFormFields = {
  date: string
  category: string
  amount: number
  account: string
  note: string
}

export type Category = {
  id: string
  category_name: string
}

export type Account = {
  id: string
  account_name: string
}

export type Expense = {
  id: string
  date: string
  category: string
  amount: number
  account: string
  note: string
}

export type Transaction = {
  id: string
  date: string
  note: string
  amount: number
  category: string
  account: string
}
