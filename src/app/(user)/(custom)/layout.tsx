import SideNav from "@/components/organisms/SideNav";
import Navbar from "@/components/organisms/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 sticky top-0 text-CareerCraftWhite">
      <Navbar />
      <div className="w-screen flex min-h-screen gap-4">
        <aside className="hidden md:block">
          <SideNav />
        </aside>
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
