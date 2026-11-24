import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const NewsCard = ({ news }) => {
  // console.log(news);
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        {/* author info */}
        <div className="flex justify-between items-center p-4 bg-slate-100">
          <div className="flex gap-1 items-center gap-3.5">
            <Image
              src={news.author?.img}
              alt={news.author?.name || "Author"}
              height={40}
              width={40}
              className="rounded-full"
            ></Image>
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title || "News image"}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <p className="line-clamp-3 font-semibold text-slate-500">
          {news.details}
        </p>
        <div className=" flex justify-between items-center">
          <div className="flex gap-3">
            <p className="flex items-center gap-3 text-xl">
              <CiStar className="text-amber-400" />
              {news.rating.number}
            </p>
            <p className="flex  tems-center gap-3 text-xl items-center">
              <FaEye />
              {news.total_view}
            </p>
          </div>
          <div>
            <Link href={`/news/${news._id}`}>
              <button className="btn">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
