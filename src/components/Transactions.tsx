import TransactionTable from "./transactions/TransactionTable"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Transactions = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Transactions</CardTitle>
          <CardDescription>
            Track spending, set budgets, and manage your money smarter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransactionTable />
        </CardContent>
      </Card>
    </div>
  )
}

export default Transactions
