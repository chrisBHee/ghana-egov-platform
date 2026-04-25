import { Header } from "@/components/layout/Header";
import { PaymentStats } from "@/components/payments/PaymentStats";
import { PaymentChart } from "@/components/payments/PaymentChart";
import { PaymentTable } from "@/components/payments/PaymentTable";

export default function PaymentsPage() {
  return (
    <>
      <Header
        title="Payment Systems"
        description="Digital government payment management — salaries, pensions, grants & contracts"
      />
      <div className="space-y-6 p-6">
        <PaymentStats />
        <PaymentChart />
        <PaymentTable />
      </div>
    </>
  );
}
