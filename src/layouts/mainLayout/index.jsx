import { Navbar } from "../components/navbar/index";
import { Sidebar } from "../components/sidebar/index";
import { Footer } from "../components/footer/index";

export const MainLayout = ({ children }) => {
  return (
    <div className="wrapper relative">
      
      <Navbar />
      <div className="flex pt-16">
        <Sidebar />
        {children}
      </div>
    </div>
    
  );
};
