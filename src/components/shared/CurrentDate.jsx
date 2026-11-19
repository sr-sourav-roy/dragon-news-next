import { format } from "date-fns";
import { connection } from "next/server";

const CurrentDate = async () => {
  await connection();
  return <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>;
};

export default CurrentDate;
