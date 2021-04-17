export const SET_APPS = "SET_APPS";
export const SET_STATS = "SET_STATS";

export const setApps = (data) => ({
  type: SET_APPS,
  payload: data,
});

export const setStats = (data) => ({
  type: SET_STATS,
  payload: data,
});
