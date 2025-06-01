import { Header } from "../components/header/index";
import { Sidebar } from "../components/sidebar/index";
import { Footer } from "../components/footer/index";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        {children}
      </div>
      <Footer />
    </div>
  );
};
