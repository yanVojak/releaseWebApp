import React, { useEffect, lazy, useLayoutEffect } from 'react';

// import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { TopicList } from '../../components/TopicList/TopicList';
import AccoutnRouter from '../AccountRouter/AccountRouter';
import { mapRoutes } from '../map-routing';
import { routes } from '../routes/mainRoutes';

// import { RoutingChats } from '@components/routing-chats';
// import { mapRoutes } from '@routing/map-routing';
// import { preloadAllSkipActual } from '@routing/preloading.utils';
// import { routes } from '@routing/routes/main-routes';
// import { routes as settingsRoutes } from '@routing/routes/settings-routes';
// import { store, StoreKeys } from '@store';
// import { AppInit } from '@store/initiation/features/app-init/app-init';

import { ACCOUNT_PATH, CREATE_LANGUAGES_PATH, CREATE_PATH, INSTANT_MAIN_PATH, JOIN_LANGUAGES_PATH, JOIN_PATH, MAIN_PATH } from '../routing.constants';

const MainRouter: React.FC = () => {
//   const dispatch = useDispatch();

//   const location = useLocation();

//   useEffect(() => {
//     dispatch(AppInit.action());
//   }, [dispatch]);

//   useLayoutEffect(() => {
//     preloadAllSkipActual(location.pathname, [...routes, ...settingsRoutes]);
//   }, [location.pathname]);

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
