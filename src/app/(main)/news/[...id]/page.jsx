import { getNewsByDetails } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const sigleNews = await getNewsByDetails(id);

  return {
    title: sigleNews.title,
    description: sigleNews.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const newsDetails = await getNewsByDetails(id);

  return (
    <div className="max-w-5xl mx-auto my-9">
      <div className="card bg-base-100  shadow-sm">
        <div className="card-body">
          {/* author info */}
          <div className="flex justify-between items-center p-4 bg-slate-100">
            <div className="flex gap-1 items-center gap-3.5">
              <Image
                src={newsDetails.author?.img}
                alt={newsDetails.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
              <div>
                <h2 className="font-semibold">{newsDetails.author?.name}</h2>
                <p className="text-xs">{newsDetails.author?.published_date}</p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3">
              <CiShare2 className="text-xl" />
              <CiBookmark className="text-xl" />
            </div>
          </div>
          <h2 className="card-title">{newsDetails.title}</h2>
          <figure>
            <Image
              src={newsDetails.image_url}
              alt={newsDetails.title}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>
          <p className="font-semibold text-slate-500">{newsDetails.details}</p>
          <div className=" flex justify-between items-center">
            <div className="flex gap-3">
              <p className="flex items-center gap-3 text-xl">
                <CiStar className="text-amber-400" />
                {newsDetails.rating.number}
              </p>
              <p className="flex  tems-center gap-3 text-xl items-center">
                <FaEye />
                {newsDetails.total_view}
              </p>
            </div>
            <div>
              <Link href={`/category/${newsDetails.category_id}`}>
                <button className="btn bg-purple-500 text-white">
                  See others news for this category{" "}
                  <BsArrowRight></BsArrowRight>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
