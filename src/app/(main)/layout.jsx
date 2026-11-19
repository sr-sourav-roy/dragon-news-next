import BrekingNews from "@/components/shared/BrekingNews";
import Headers from "@/components/shared/Headers";
import Navbers from "@/components/shared/Navbers";

const MainLayout = ({ children }) => {
  return (
    <>
      <Headers></Headers>
      <BrekingNews></BrekingNews>
      <Navbers></Navbers>
      {children}
    </>
  );
};

export default MainLayout;
