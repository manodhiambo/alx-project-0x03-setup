// components/layouts/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-28">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
