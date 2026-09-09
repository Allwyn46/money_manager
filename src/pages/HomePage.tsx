import AddTransaction from "@/components/AddTransaction"
import Transactions from "@/components/Transactions"

const HomePage = () => {
  return (
    <section>
      <div className="flex h-screen items-center justify-center gap-5">
        <div className="w-175">
          <Transactions />
        </div>
        <div className="w-100">
          <AddTransaction />
        </div>
      </div>
    </section>
  )
}

export default HomePage
