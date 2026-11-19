import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import Image from "next/image";
const getCategories = async () => {
  "use cache";
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const categoreis = await getCategories();
  // console.log(categoreis.news_category);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 my-[60px]">
      {/* all category */}
      <div className="col-span-3">
        <LeftSidebar categoreis={categoreis} activeId={"05"}></LeftSidebar>
      </div>
      {/*  Dragon News Home*/}
      <div className="text-4xl bg-yellow-100 col-span-6">Dragon News Home</div>

      {/* Login with */}

      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
}
