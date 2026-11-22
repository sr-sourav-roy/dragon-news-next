import NewsDetails from "@/components/shared/NewsDetails";
import { Suspense } from "react";

const NewsDetailsPage = async ({ params }) => {
  return (
    <div>
      <Suspense
        fallback={<div className="text-center py-14">loading news</div>}
      >
        <NewsDetails params={params}></NewsDetails>
      </Suspense>
    </div>
  );
};

export default NewsDetailsPage;
