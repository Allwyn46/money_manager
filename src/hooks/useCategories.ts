import { useCallback, useEffect, useState } from "react"
import { toast } from "@/components/ui/toast"
import { getCategories, type Category } from "@/api/transactions"

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const refetch = useCallback(async () => {
    try {
      setIsLoading(true)
      const data = await getCategories()
      setCategories(data)
    } catch (error) {
      console.error(error)
      toast.add({
        title: "Failed to load categories",
        description: "Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    refetch()
  }, [refetch])

  return { categories, isLoading, refetch }
}
