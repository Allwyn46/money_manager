import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./DatePicker"
import { ComboBoxx } from "./ComboBoxx"
import { useState } from "react"
import { useCategories } from "@/hooks/useCategories"
import { useAccounts } from "@/hooks/useAccounts"
import { useForm, Controller, type SubmitHandler } from "react-hook-form"
import { toast } from "./ui/toast"
import type { expenseFormFields } from "@/lib/types"

const AddExpense = () => {
  const { register, handleSubmit, control } = useForm<expenseFormFields>({
    defaultValues: {
      date: "",
      category: "",
      account: "",
      note: "",
    },
  })
  const { onChange: rhfOnChange, ...amountField } = register("amount", {
    valueAsNumber: true,
  })

  const { categories, isLoading, refetch } = useCategories()
  const { accounts, isAccLoading, accrefetch } = useAccounts()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formSubmit: SubmitHandler<expenseFormFields> = async (data) => {
    console.log(data) // amount is now a number

    // try {
    //   setIsSubmitting(true)
    //   toast.add({
    //     title: "Expense Added",
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
            <Controller
              name="date"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  widthInput="w-48"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <ComboBoxx
                  items={categories.map((c) => c.category_name)}
                  placholdertext="Choose Category"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
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
            {...amountField}
            onChange={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "")
              rhfOnChange(e)
            }}
          />
        </div>

        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="account">Account</Label>
          </div>
          <Controller
            name="account"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <ComboBoxx
                items={accounts.map((a) => a.account_name)}
                placholdertext="Choose Account"
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <div className="mt-5 grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="note">Note</Label>
          </div>
          <Input
            id="note"
            placeholder="Note"
            type="text"
            required
            className="py-4"
            {...register("note")}
          />
        </div>

        <div className="mt-5">
          <Button type="submit" className="w-full p-5" disabled={isSubmitting}>
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense
