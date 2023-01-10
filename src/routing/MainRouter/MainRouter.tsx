import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { mapRoutes } from '../map-routing';
import { routes } from '../routes/mainRoutes';

// import { RoutingChats } from '@components/routing-chats';
// import { mapRoutes } from '@routing/map-routing';
// import { preloadAllSkipActual } from '@routing/preloading.utils';
// import { routes } from '@routing/routes/main-routes';
// import { routes as settingsRoutes } from '@routing/routes/settings-routes';
// import { store, StoreKeys } from '@store';
// import { AppInit } from '@store/initiation/features/app-init/app-init';

import {INSTANT_MAIN_PATH, MAIN_PATH } from '../routing.constants';

const MainRouter: React.FC = () => {
  return (
    <div>
      <Routes>
        {/* {mapRoutes(routes)} */}
        
        <Route path={MAIN_PATH} element={<Navigate to={INSTANT_MAIN_PATH} />} />
        {mapRoutes(routes)}
        {/* <Route path={INSTANT_MAIN_PATH} element={<TopicList onChangeTopic={() => {}} />} /> */}
        {/* <Route path={`${ACCOUNT_PATH}/*`} element={<AccoutnRouter />} /> */}
        {/* <Route path={CREATE_PATH} element={<Navigate to={CREATE_LANGUAGES_PATH} />} /> */}
        {/* <Route path={JOIN_PATH} element={<Navigate to={JOIN_LANGUAGES_PATH} />} /> */}
      </Routes>
    </div>
  );
};

// MainRouter.displayName = 'MainRouter';

export default MainRouter;
