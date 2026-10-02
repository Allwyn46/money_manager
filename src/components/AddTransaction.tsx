import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddExpense from "./AddExpense"
import AddIncome from "./AddIncome"
import AddSelfTransfer from "./AddSelfTransfer"
import { AddCategory } from "./AddCategory"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-react"

const AddTransaction = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">
              Add Transaction
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" />}>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <AddCategory />
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="">
          <Tabs defaultValue="expense">
            <TabsList>
              <TabsTrigger value="expense">Expense</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="self">Self Transfer</TabsTrigger>
            </TabsList>
            <TabsContent value="expense">
              <AddExpense />
            </TabsContent>
            <TabsContent value="income">
              <AddIncome />
            </TabsContent>
            <TabsContent value="self">
              <AddSelfTransfer />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddTransaction
