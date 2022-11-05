import { useCallback, useEffect, useState } from 'react';

import { MainButtonParams } from '../telegram/types';

type MainButtonType = {
  setMainButtonOnClick: (fn: () => void) => void;
  setMainButtonParams: (obj: MainButtonParams) => void;
  setLoadingMainButton: (state: boolean) => void;
};

const useTgMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton?: string,
): MainButtonType => {
  // const [submitFunction, setSubmitFunction] = useState<() => void>();

  const setMainButtonOnClick = useCallback(
    (fn: () => void) => {
      window.Telegram.WebApp.onEvent('mainButtonClicked', fn);

    return () => {
      window.Telegram.WebApp.offEvent('mainButtonClicked', fn)
    }
    }, []);

  const setMainButtonParams = useCallback(
    (obj: MainButtonParams) => {
      if (!obj.text) {
        window.Telegram.WebApp.MainButton.setParams({ ...obj, text: defaultTextMainButton });
        return;
      }

      window.Telegram.WebApp.MainButton.setParams(obj);
    },
    [defaultTextMainButton],
  );

  const setLoadingMainButton = useCallback(
    (state: boolean) => {
      if (state) {
        setMainButtonParams({ is_active: false });
        window.Telegram.WebApp.MainButton.showProgress(state);
      } else {
        setMainButtonParams({ is_active: true });
        window.Telegram.WebApp.MainButton.hideProgress();
      }
    },
    [setMainButtonParams],
  );

  useEffect(() => {
    if (defaultTextMainButton) {
      setMainButtonParams({
        is_active: isEnabledMainButton,
        is_visible: isVisibleMainButton,
        text: defaultTextMainButton,
      });
    } else {
      setMainButtonParams({
        is_active: isEnabledMainButton,
        is_visible: isVisibleMainButton,
      });
    }
  }, [isEnabledMainButton, isVisibleMainButton, defaultTextMainButton, setMainButtonParams]);

  return {
    setMainButtonOnClick,
    setMainButtonParams,
    setLoadingMainButton,
  };
};

export default useTgMainButton;
