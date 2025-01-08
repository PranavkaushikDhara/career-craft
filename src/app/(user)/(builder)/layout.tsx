import SideNav from "@/components/organisms/SideNav";
import Navbar from "@/components/organisms/Navbar";
import React from "react";
import ResumeNav from "@/components/organisms/ResumeNav";

interface Props {
  children: React.ReactNode;
}

const BuilderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-screen gap-2 text-CareerCraftWhite">
      <Navbar />
      <div className="flex gap-4 flex-1">
        <aside className="hidden md:block">
          <ResumeNav />
        </aside>
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};

export default BuilderLayout;
