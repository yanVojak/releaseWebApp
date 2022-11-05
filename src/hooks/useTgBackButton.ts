import { useCallback, useEffect, useState } from 'react';

type BackButtonType = {
  setBackButtonOnClick: (fn: () => void) => void;
  showBackButton: () => void;
  hideBackButton: () => void;
};

const useTgBackButton = (isVisibleBackButton: boolean): BackButtonType => {
  const [backFunction, setBackFunction] = useState<() => void>();

  const setOnClick = useCallback((myFunc: Function) => {
    const f = () => myFunc;
    window.Telegram.WebApp.MainButton.onClick(f);
  }, [])

  const setOffClick = useCallback((myFunc: Function) => {
    const f = () => myFunc;
    window.Telegram.WebApp.MainButton.offClick(f);
  }, [])

  const setBackButtonOnClick = useCallback(
    (fn: () => void) => {
      setOnClick(fn);

    return () => setOffClick(fn)
    }, []
  );

  const showBackButton = useCallback(() => {
    window.Telegram.WebApp.BackButton.show();
  }, []);

  const hideBackButton = useCallback(() => {
    window.Telegram.WebApp.BackButton.hide();
  }, []);

  useEffect(
    () => () => {
      if (backFunction) {
        window.Telegram.WebApp.BackButton.offClick(backFunction);
      }
    },
    [backFunction],
  );

  useEffect(() => {
    if (isVisibleBackButton) {
      showBackButton();
    } else {
      hideBackButton();
    }
  }, [isVisibleBackButton, showBackButton, hideBackButton]);

  return {
    setBackButtonOnClick,
    showBackButton,
    hideBackButton,
  };
};

export default useTgBackButton;
