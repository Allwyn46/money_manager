import type { openCloseProps } from "@/lib/types"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/toast"
import { addAccount } from "@/api/transactions"

const AddAccount = ({ open, onOpenChange }: openCloseProps) => {
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = name.trim()
    if (!trimmed) return

    try {
      setIsSubmitting(true)
      await addAccount(trimmed)
      
      setName("")
      onOpenChange(false)
      toast.add({
        title: "Account Added",
      })
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Failed to add account",
        description: "Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={formSubmit} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>Add Account</DialogTitle>
            <DialogDescription>
              Add account name here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Account Name</Label>
              <Input
                id="name-1"
                placeholder="Enter the Account Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              }
            />
            <Button type="submit" disabled={isSubmitting || !name.trim()}>
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddAccount
