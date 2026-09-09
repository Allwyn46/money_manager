import TransactionTable from "./TransactionTable"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Transactions = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <TransactionTable />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Transactions
