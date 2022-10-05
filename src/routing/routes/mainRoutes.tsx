import { Account } from "../../components/Account/Account";
import { Route } from "react-router-dom";
import { CREATE_TOPICS_PATH, INSTANT_MAIN_PATH, MEETING_PATH } from "../routing.constants";
import { MainRoutesEnum, MainRoutesObject } from "../routing.types";
import { TopicList } from "../../components/TopicList/TopicList";
import { LevelList } from "../../components/LevelList/LevelList";

const MainRoutes: MainRoutesObject = {
  [MainRoutesEnum.INSTANT_MAIN]: {
    path: INSTANT_MAIN_PATH,
    pageName: "Main",
    props: {
      element: Account,
      children: [<Route key={INSTANT_MAIN_PATH} path="*" element={<Account />} />],
    },
  },
  [MainRoutesEnum.MEETING]: {
    path: CREATE_TOPICS_PATH,
    pageName: "Topic",
    props: {
      element: TopicList,
      children: [<Route key={CREATE_TOPICS_PATH} path="*" element={<TopicList />} />],
    },
  },
  [MainRoutesEnum.ACCOUNT]: {
    path: MEETING_PATH,
    pageName: "Meeting",
    props: {
      element: LevelList,
      children: [
      <Route key={MEETING_PATH} path="*" element={<LevelList />} />
    ],
    },
  },
};

export const routes = Object.values(MainRoutes);