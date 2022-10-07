import { useCallback, useEffect } from "react";
import { MainButtonParams } from "../telegram/types";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton: string
): MainButtonType => {
  const setBackButtonOnClick = useCallback((fn: () => void) => {
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
      window.Telegram.WebApp.MainButton.offClick(() => setBackButtonOnClick);
    },
    [setBackButtonOnClick]
  );

  useEffect(() => {
    setMainButtonParams({
      is_active: isEnabledMainButton,
      is_visible: isVisibleMainButton,
      text: defaultTextMainButton,
    });
  }, [isEnabledMainButton, isVisibleMainButton, defaultTextMainButton]);

  return {
    setBackButtonOnClick,
    setMainButtonParams,
    setLoadingMainButton,
  };
};

export default useTelegramMainButton;

type MainButtonType = {
  setBackButtonOnClick: (fn: () => void) => void;
  setMainButtonParams: (obj: MainButtonParams) => void;
  setLoadingMainButton: (state: boolean) => void
};
