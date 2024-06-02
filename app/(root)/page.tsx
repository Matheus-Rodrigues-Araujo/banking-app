"use server";
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const page = async () => {
  const loggedIn = await getLoggedInUser()
  if(!loggedIn) redirect("/sign-in")

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
        // @ts-ignore
            accounts={[{ currentBalance: 12312 },{ currentBalance: 2342 },{ currentBalance: 1234 }]}
            totalBanks={5}
            totalCurrentBalance={1500.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        // @ts-ignore
        banks={[{ currentBalance: 2000 }, { currentBalance: 3000 }]}
      />
    </section>
  );
};

export default page;
