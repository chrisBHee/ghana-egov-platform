import { Header } from "@/components/layout/Header";
import { AIInsights } from "@/components/analytics/AIInsights";
import { PredictionChart } from "@/components/analytics/PredictionChart";
import { ResourceAllocation } from "@/components/analytics/ResourceAllocation";

export default function AnalyticsPage() {
  return (
    <>
      <Header
        title="AI Analytics"
        description="Machine learning insights, policy predictions & resource optimization"
      />
      <div className="space-y-6 p-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <PredictionChart />
          <ResourceAllocation />
        </div>
        <AIInsights />
      </div>
    </>
  );
}
