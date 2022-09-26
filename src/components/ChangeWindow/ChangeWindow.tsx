import react, { useEffect } from "react";

interface IChangeWindowProps {
  children: React.ReactNode;
  nextPage: () => void;
  previousPage: () => void;
}

interface IHeaderProps {
  children: React.ReactNode;
}

const MainWindow: React.FC<IChangeWindowProps> = ({
  children,
  nextPage,
  previousPage,
}) => {
  useEffect(() => {
    window.Telegram.WebApp.BackButton.onClick(previousPage);
    window.Telegram.WebApp.MainButton.onClick(nextPage);
  }, [previousPage, nextPage]);

  useEffect(
    () => () => {
      window.Telegram.WebApp.BackButton.offClick(previousPage);
      window.Telegram.WebApp.MainButton.offClick(nextPage);
      window.Telegram.WebApp.MainButton.setText("CONTINUE");
    },
    [previousPage, nextPage]
  );

  return <>{children}</>;
};

const Header: React.FC<IHeaderProps> = ({ children }) => (
  <header>{children}</header>
);

const ChangeWindow = Object.assign(MainWindow, {
  Header,
});

export { ChangeWindow };