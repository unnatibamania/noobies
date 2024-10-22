import { Header } from "@/components/header/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col ">
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;

