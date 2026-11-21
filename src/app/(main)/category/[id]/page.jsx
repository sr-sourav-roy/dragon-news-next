import NewsContent from "@/components/shared/NewsContent";
import { Suspense } from "react";

const NewsCategoryPage = ({params}) => {
  return (
    <div>
      <Suspense
        fallback={<div className="text-center py-20">Loading news...</div>}
      >
        <NewsContent params={params}></NewsContent>
      </Suspense>
    </div>
  );
};

export default NewsCategoryPage;
