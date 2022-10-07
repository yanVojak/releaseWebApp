import { useCallback, useEffect } from "react";

const useTelegramMainButton = (
  isVisibleMainButton: boolean,
  isEnabledMainButton: boolean,
  defaultTextMainButton: string,
  onClick: () => void
) => {
  const setMainButton = useCallback((fn: () => void) => {
    window.Telegram.WebApp.MainButton.onClick(fn);
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
    setMainButton(onClick);

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
    onClick,
    setMainButton,
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
