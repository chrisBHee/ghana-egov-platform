import { Header } from "@/components/layout/Header";
import { AgencyGrid } from "@/components/agencies/AgencyGrid";

export default function AgenciesPage() {
  return (
    <>
      <Header
        title="Agency Management"
        description="Government agency digitalization tracking & inter-agency data centralization"
      />
      <div className="p-6">
        <AgencyGrid />
      </div>
    </>
  );
}
