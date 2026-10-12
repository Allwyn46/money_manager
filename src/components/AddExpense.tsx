import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"
import { ComboBoxx } from "./ComboBoxx"
import { useState } from "react"
import { useCategories } from "@/hooks/useCategories"
import { useAccounts } from "@/hooks/useAccounts"
import { useForm, type SubmitHandler } from "react-hook-form"
import { toast } from "./ui/toast"
import type { expenseFormFields } from "@/lib/types"

const AddExpense = () => {
  const [amount, setAmount] = useState(0)

  const { register, handleSubmit } = useForm<expenseFormFields>()
  const { onChange: rhfOnChange, ...amountField } = register("amount")

  const { categories, isLoading, refetch } = useCategories()
  const { accounts, isAccLoading, accrefetch } = useAccounts()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formSubmit: SubmitHandler<expenseFormFields> = async (data) => {
    console.log(data)

    // try {
    //   setIsSubmitting(true)
    //   toast.add({
    //     title: "Category Added",
    //   })
    // } catch (error) {
    //   console.error(error)
    //   toast.add({
    //     title: "Failed to add Expense",
    //     description: "Please try again.",
    //   })
    // } finally {
    //   setIsSubmitting(false)
    // }
  }

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="flex items-center justify-between gap-6">
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <DatePicker widthInput="w-48" {...register("date")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <ComboBoxx
              items={categories.map((c) => c.category_name)}
              placholdertext="Choose Category"
              {...register("category")}
            />
          </div>
        </div>
        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="amount">Amount</Label>
          </div>
          <Input
            id="amount"
            placeholder="Enter Amount"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            required
            className="py-4"
            value={amount}
            {...amountField}
            onChange={(e) => {
              const cleaned = e.target.value.replace(/[^0-9]/g, "")
              e.target.value = cleaned // so react-hook-form receives the cleaned value
              setAmount(Number(cleaned))
              rhfOnChange(e)
            }}
          />
        </div>

        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="account">Account</Label>
          </div>
          <ComboBoxx
            items={accounts.map((a) => a.account_name)}
            placholdertext="Choose Account"
            {...register("account")}
          />
        </div>

        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="note">Note</Label>
          </div>
          <Input
            id="amount"
            placeholder="Note"
            type="text"
            required
            className="py-4"
            {...register("note")}
          />
        </div>

        <div className="mt-5">
          <Button type="submit" className="w-full p-5">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense
