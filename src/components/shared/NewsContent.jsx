import LeftSidebar from "@/components/homepage/news/LeftSidebar";
import RightSidebar from "@/components/homepage/news/RightSidebar";
import { getCategories, getNewsByCategories } from "@/lib/data";
import NewsCard from "../homepage/news/NewsCard";

const NewsContent = async ({ params }) => {
  const { id } = await params;
  // console.log(id, "responsivedata");

  const categoreis = await getCategories();
  const newsData = await getNewsByCategories(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 my-[60px]">
      {/* all category */}
      <div className="col-span-3">
        <LeftSidebar categoreis={categoreis} activeId={id}></LeftSidebar>
      </div>

      {/*  Dragon News Home*/}
      <div className="col-span-6 ">
        <h2 className="text-lg font-bold">Dragon News Home</h2>
        <div className="space-y-4">
          {newsData.length > 0 ? (
            newsData.map((n) => <NewsCard key={n._id} news={n}></NewsCard>)
          ) : (
            <h2 className="font-bold text-center text-red-400">
              No news found
            </h2>
          )}
        </div>
      </div>

      {/* Login with */}
      <div className="col-span-3">
        <RightSidebar></RightSidebar>
      </div>
    </div>
  );
};

export default NewsContent;
