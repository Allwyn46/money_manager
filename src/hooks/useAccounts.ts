import { useCallback, useEffect, useState } from "react"
import { toast } from "@/components/ui/toast"
import { getAccounts, type Account } from "@/api/transactions"

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await getAccounts()
      setAccounts(data)
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Failed to fetch Accounts",
        description: "Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { accounts, isLoading, refetch }
}
