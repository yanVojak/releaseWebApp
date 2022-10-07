import { useCallback, useEffect } from "react";
import { MainButtonParams } from "../telegram/types";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton: string
): MainButtonType => {
  const setMainButtonOnClick = useCallback((fn: () => void) => {
    window.Telegram.WebApp.MainButton.onClick(fn);
    return fn;
  }, []);

  const setLoadingMainButton = useCallback((state: boolean) => {
    return window.Telegram.WebApp.MainButton.showProgress(state);
  }, []);

  const setMainButtonParams = useCallback((obj: MainButtonParams) => {
    return window.Telegram.WebApp.MainButton.setParams(obj);
  }, []);

  useEffect(
    () => () => {
      window.Telegram.WebApp.MainButton.offClick(() => setMainButtonOnClick);
    },
    [setMainButtonOnClick]
  );

  useEffect(() => {
    setMainButtonParams({
      is_active: isEnabledMainButton,
      is_visible: isVisibleMainButton,
      text: defaultTextMainButton,
    });
  }, [isEnabledMainButton, isVisibleMainButton, defaultTextMainButton, setMainButtonParams]);

  return {
    setMainButtonOnClick,
    setMainButtonParams,
    setLoadingMainButton,
  };
};

export default useTelegramMainButton;

type MainButtonType = {
  setMainButtonOnClick: (fn: () => void) => void;
  setMainButtonParams: (obj: MainButtonParams) => void;
  setLoadingMainButton: (state: boolean) => void
};
