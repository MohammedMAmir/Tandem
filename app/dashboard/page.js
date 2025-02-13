import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import Login from "@/components/Login";

export const metadata = {
    title: "Tandem | Dashboard",
    description: "Side by side, even miles apart.",
  };

export default function DashboardPage() {

    const isAuthenticated = true

    let children = (
        <Login />
    )

    if (isAuthenticated) {
        children = (
            <Dashboard />
        )
    }

    return (
        <Main>
            { children }
        </Main>
    )
}