import Link from "next/link";

const LeftSidebar = ({ categoreis, activeId }) => {
  return (
    <div>
      <h1 className="text-lg font-bold">All Categroies</h1>
      <ul className="flex flex-col gap-4 p-3.5 mt-3.5">
        {categoreis.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={` ${activeId === category.category_id && "bg-slate-200 "}   rounded-md font-bold text-center text-md`}
            >
              <Link href={`/category/${category.category_id}`} className="block p-2 hover:bg-slate-200 rounded-2xl">
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
