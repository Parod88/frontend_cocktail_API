import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#282c34] to-[#1e1e2e] p-4">
      <div className="w-full max-w-5xl">{children}</div>
    </div>
  );
};

export default Layout;
