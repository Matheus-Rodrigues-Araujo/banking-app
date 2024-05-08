import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
const page = () => {
  const loggedIn = {
    firstName: "Matthew",
    lastName: "Rodriguez",
    email: "matheus@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={5}
            totalCurrentBalance={1500.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn} 
        transactions={[]} 
        banks={[{currentBalance: 2000}, {currentBalance: 3000}]} 
      />
    </section>
  );
};

export default page;
