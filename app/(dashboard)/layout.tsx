import { Header } from "@/components/header/Header";

import Sidebar from "@/components/sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex h-full flex-col">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

