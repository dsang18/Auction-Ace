import AllPurchasesTable from "../components/AllPurchasesTable";
import Section from "../components/Section";
import DashboardSections from "../components/dashboard_sections";

export default function page() {
  return (
    <div>
        <Section section_name1={"Order Bidding"} section_name2={"Order Bidding"} />
        <DashboardSections section_active="orderbidding" />
        <div className="flex items-center justify-center w-full p-2">
            <AllPurchasesTable/>
        </div>
    </div>
  )
}
