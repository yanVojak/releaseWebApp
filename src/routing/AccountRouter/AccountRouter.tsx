import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { Account } from "../../components/Account/Account";
import { LevelList } from "../../components/LevelList/LevelList";
import { ACCOUNT_LEVELS_PATH, ACCOUNT_PATH } from "../routing.constants";

// import { AppVersion } from "@components/app-version";
// import { SettingsNavigation } from "@pages/settings/settings-navigation";
// import { mapRoutes } from "@routing/map-routing";
// import { routes } from "@routing/routes/settings-routes";

// import "./settings-router.scss";

const BLOCK_NAME = "settings-router";

const AccoutnRouter: React.FC = () => (
  <>
    {/* <div className={`${BLOCK_NAME}__data`}> */}
      <Routes>
        <Route path='' element={<Account />} />
      </Routes>
    {/* </div> */}
  </>
);

export default AccoutnRouter;
