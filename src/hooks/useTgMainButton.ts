import { useCallback, useEffect } from "react";
import { MainButtonParams } from "../telegram/types";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton: string,
) => {

  // const hideMainButton = useCallback(() => {
  //   return window.Telegram.WebApp.MainButton.hide();
  // }, []);

  // const showMainButton = useCallback(() => {
  //   return window.Telegram.WebApp.MainButton.show();
  // }, []);

  // const enableMainButton = useCallback(() => {
  //   return window.Telegram.WebApp.MainButton.enable();
  // }, []);

  // const disabeleMainButton = useCallback(() => {
  //   return window.Telegram.WebApp.MainButton.disable();
  // }, []);

  // const setTextMainButton = useCallback((text: string) => {
  //   return window.Telegram.WebApp.MainButton.setText(text);
  // }, []);

  const setBackButtonOnClick = useCallback((fn: () => void) => {
    window.Telegram.WebApp.MainButton.onClick(fn);
    return fn
  }, []);

  const setLoadingMainButton = useCallback((state: boolean) => {
    return window.Telegram.WebApp.MainButton.showProgress(state);
  }, []);

  const setMainButtonParams = useCallback((obj: MainButtonParams) => {
    return window.Telegram.WebApp.MainButton.setParams(obj)
  }, [])


  useEffect(
    () => () => {
      window.Telegram.WebApp.MainButton.offClick(() => setBackButtonOnClick);
    },
    [setBackButtonOnClick]
  );

  useEffect(() => {

    if (isEnabledMainButton) {
      setMainButtonParams({'is_active': true})
    } else {
      setMainButtonParams({'is_active': false})
    }

    if (isVisibleMainButton) {
      setMainButtonParams({'is_visible': true})
    } else {
      setMainButtonParams({'is_visible': false})
    }

    setMainButtonParams({'text': defaultTextMainButton})
    // setTextMainButton(defaultTextMainButton);
  }, [
    isEnabledMainButton,
    isVisibleMainButton,
    defaultTextMainButton,
    // enableMainButton,
    // disabeleMainButton,
    // showMainButton,
    // hideMainButton,
    // setTextMainButton,
  ]);

  return {
    // hideMainButton,
    // showMainButton,
    // enableMainButton,
    // disabeleMainButton,
    // setTextMainButton,
    setBackButtonOnClick,
    setMainButtonParams,
    setLoadingMainButton
  } 
};

export default useTelegramMainButton;

export type MainButtonType = {
  hideMainButton: () => void;
  showMainButton: () => void;
  enableMainButton: () => void;
  disabeleMainButton: () => void;
  setTextMainButton: (text: string) => void;
  setBackButtonOnClick: (fn: () => void) => void
};
