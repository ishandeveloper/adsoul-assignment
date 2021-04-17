import { SINGLE_STAT_API } from "./index";

export const getSingleAppStats = async (id) => {
  const data = fetch(`${SINGLE_STAT_API}/${id}`).then((res) => res.json());
  return data;
};
