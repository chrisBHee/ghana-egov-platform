import { Header } from "@/components/layout/Header";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { AdoptionChart } from "@/components/dashboard/AdoptionChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <>
      <Header
        title="Dashboard"
        description="Ghana E-Government Data Centralization Overview"
      />
      <div className="space-y-6 p-6">
        <StatsCards />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AdoptionChart />
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
