import { useCallback, useEffect } from "react";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton: string,
  // onClick: () => void
) => {
  // const setMainButton = useCallback((fn: () => void) => {
  //   window.Telegram.WebApp.MainButton.onClick(fn);
  // }, []);


  const hideMainButton = useCallback(() => {
    window.Telegram.WebApp.MainButton.hide();
  }, []);

  const showMainButton = useCallback(() => {
    window.Telegram.WebApp.MainButton.show();
  }, []);

  const enableMainButton = useCallback(() => {
    window.Telegram.WebApp.MainButton.enable();
  }, []);

  const disabeleMainButton = useCallback(() => {
    window.Telegram.WebApp.MainButton.disable();
  }, []);

  const setTextMainButton = useCallback((text: string) => {
    window.Telegram.WebApp.MainButton.setText(text);
  }, []);

  const setBackButtonOnClick = useCallback((fn: () => void) => {
    window.Telegram.WebApp.MainButton.onClick(fn);
    return fn
  }, []);

  useEffect(
    () => () => {
      window.Telegram.WebApp.MainButton.offClick(() => setBackButtonOnClick);
    },
    [setBackButtonOnClick]
  );

  useEffect(() => {

    if (isEnabledMainButton) {
      enableMainButton();
    } else {
      disabeleMainButton();
    }

    if (isVisibleMainButton) {
      showMainButton();
    } else {
      hideMainButton();
    }

    setTextMainButton(defaultTextMainButton);
  }, [
    isEnabledMainButton,
    isVisibleMainButton,
    defaultTextMainButton,
    enableMainButton,
    disabeleMainButton,
    showMainButton,
    hideMainButton,
    setTextMainButton,
  ]);

  return {
    hideMainButton,
    showMainButton,
    enableMainButton,
    disabeleMainButton,
    setTextMainButton,
    setBackButtonOnClick
  } as MainButtonType;
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
