import { useCallback, useEffect } from "react";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton: string,
  onClick: () => void
) => {

  const setBackButton = useCallback((fn: () => void) => {
    window.Telegram.WebApp.BackButton.onClick(fn);
  }, []);

  useEffect(
    () => () => {
      window.Telegram.WebApp.MainButton.offClick(onClick);
    },
    [onClick]
  );

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

  useEffect(() => {
    setTextMainButton(defaultTextMainButton)
  }, [defaultTextMainButton, setTextMainButton])

  useEffect(() => {
    if (isEnabledMainButton) {
      enableMainButton();
    } else {
      disabeleMainButton();
    }
  }, [isEnabledMainButton, enableMainButton, disabeleMainButton]);

  useEffect(() => {
    if (isVisibleMainButton) {
      showMainButton();
    } else {
      hideMainButton();
    }
  }, [isVisibleMainButton, showMainButton, hideMainButton])

  useEffect(() => {
    setBackButton(onClick);
  }, [onClick, setBackButton])
  

  return {
    hideMainButton,
    showMainButton,
    enableMainButton,
    disabeleMainButton,
    setTextMainButton,
  } as MainButtonType;
};

export default useTelegramMainButton;

export type MainButtonType = {
  hideMainButton: () => void;
  showMainButton: () => void;
  enableMainButton: () => void;
  disabeleMainButton: () => void;
  setTextMainButton: (text: string) => void;
};
