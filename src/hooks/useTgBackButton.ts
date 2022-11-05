import { useCallback, useEffect, useState } from 'react';

type BackButtonType = {
  setBackButtonOnClick: (fn: () => void) => void;
  showBackButton: () => void;
  hideBackButton: () => void;
};

const useTgBackButton = (isVisibleBackButton: boolean): BackButtonType => {
  const [backFunction, setBackFunction] = useState<() => void>();

  const setBackButtonOnClick = useCallback(
    (fn: () => void) => {
      window.Telegram.WebApp.onEvent('backButtonClicked', () => fn);

    return () => {
      window.Telegram.WebApp.offEvent('backButtonClicked', () => fn)
    }
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
