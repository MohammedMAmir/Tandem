import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import Login from "@/components/Login";
import Loading from "@/components/Loading";

export const metadata = {
    title: "Tandem | Dashboard",
    description: "Side by side, even miles apart.",
  };

export default function DashboardPage() {


    return (
        <Main>
            <Dashboard />
        </Main>
    )
}