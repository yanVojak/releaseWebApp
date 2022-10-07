import { useCallback, useEffect } from "react";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton : string,
  onClick: () => void,
) => {
  const setBackButton = useCallback((fn: () => void) => {
    window.Telegram.WebApp.BackButton.onClick(fn);
  }, []);

  useEffect(
    () => () => {
      window.Telegram.WebApp.MainButton.offClick(onClick);
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
    setBackButton(onClick);

    if (isVisibleMainButton && !window.Telegram.WebApp.MainButton.isVisible) {
      showMainButton();
    } else {
      hideMainButton();
    }

    if (isEnabledMainButton && !window.Telegram.WebApp.MainButton.isActive) {
      enableMainButton();
    } else {
      disabeleMainButton();
    }

    window.Telegram.WebApp.MainButton.setText(defaultTextMainButton);
  }, [setBackButton, onClick, showMainButton, isVisibleMainButton]);

  return {
    hideMainButton,
    showMainButton,
    enableMainButton,
    disabeleMainButton,
    setTextMainButton,
  } as MainButtonType;
};

export default useTelegramMainButton;

type MainButton = {
  isVisibleMainButton: boolean;
  isEnabledMainButton: boolean;
  defaultTextMainButton: string;
  onClick: () => void;
};

export type MainButtonType = {
  hideMainButton: () => void;
  showMainButton: () => void;
  enableMainButton: () => void;
  disabeleMainButton: () => void;
  setTextMainButton: (text: string) => void;
};
