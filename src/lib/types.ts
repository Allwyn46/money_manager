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
