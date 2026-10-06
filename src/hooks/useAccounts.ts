import { useCallback, useEffect, useState } from "react"
import { toast } from "@/components/ui/toast"
import { getAccounts, type Account } from "@/api/transactions"

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [isAccLoading, setIsAccLoading] = useState(true)

  const accrefetch = useCallback(async () => {
    try {
      setIsAccLoading(true)
      const data = await getAccounts()
      setAccounts(data)
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Failed to fetch Accounts",
        description: "Please try again.",
      })
    } finally {
      setIsAccLoading(false)
    }
  }, [])

  useEffect(() => {
    accrefetch()
  }, [accrefetch])

  return { accounts, isAccLoading, accrefetch }
}
