import { Header } from "@/components/layout/Header";
import { InfraStats } from "@/components/infrastructure/InfraStats";
import { DataCenterMap } from "@/components/infrastructure/DataCenterMap";
import { ProjectTimeline } from "@/components/infrastructure/ProjectTimeline";

export default function InfrastructurePage() {
  return (
    <>
      <Header
        title="Data Center Infrastructure"
        description="African data center network monitoring & infrastructure planning"
      />
      <div className="space-y-6 p-6">
        <InfraStats />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DataCenterMap />
          </div>
          <ProjectTimeline />
        </div>
      </div>
    </>
  );
}
