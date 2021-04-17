import { SET_APPS, setApps, setStats, SET_STATS } from "./actions";
import { APP_LIST_API, ALL_STATS_API } from "../../utils";

const initialState = {
  apps: [],
  stats: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APPS: {
      console.log("SETTING");
      return {
        ...state,
        apps: action.payload,
      };
    }
    case SET_STATS: {
      return { ...state, stats: action.payload };
    }
    default:
      return state;
  }
};

export const loadAppList = async (dispatch) => {
  const apps = await fetch(APP_LIST_API).then((res) => res.json());
  dispatch(setApps(apps));
};

export const loadAppStats = async (dispatch) => {
  const stats = await fetch(ALL_STATS_API).then((res) => res.json());
  console.log(stats);
  dispatch(setStats(stats));
};
