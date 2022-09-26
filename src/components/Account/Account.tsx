import react, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Account = () => {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;

  const handleClose = useCallback(() => {
    navigate("/");
  }, []);

  const handleBack = useCallback(() => {
    navigate("/account");
    tg.MainButton.offClick(handleClose);
    tg.MainButton.offClick(handleBack);
  }, []);

  useEffect(() => {
    tg.BackButton.offClick(handleBack);
    tg.MainButton.offClick(handleBack);
    tg.BackButton.show();
    tg.MainButton.hide();
    tg.BackButton.onClick(handleClose);
    tg.expand();
  }, []);

  const handleChangeLanguage = useCallback(() => {
    tg.BackButton.offClick(handleClose);
    tg.BackButton.show();
    tg.MainButton.show();
    tg.BackButton.onClick(handleBack);
    tg.MainButton.onClick(handleBack);
    tg.expand();
    navigate("/languages");
  }, []);

  const handleChangeLevel = useCallback(() => {
    tg.BackButton.offClick(handleClose);
    tg.BackButton.show();
    tg.MainButton.show();
    tg.BackButton.onClick(handleBack);
    tg.MainButton.onClick(handleBack);
    tg.expand();
    navigate("/levels");
  }, []);

  return (
    <div className={styles.container}>
      <h2>Account</h2>
      <div className="item">
        <span>Practice language: English</span>
        <button onClick={handleChangeLanguage}>change</button>
      </div>
      <div className="item">
        <span>level: beginner</span>
        <button onClick={handleChangeLevel}>change</button>
      </div>
      <div className="item">
        <span>interface language: English</span>
        <button onClick={handleChangeLanguage}>change</button>
      </div>
      <div className="item">
        <span>male/female: </span>
        <div>
          <label>
            male
            <input type="radio" name="gender" />
          </label>
          <label>
            female
            <input type="radio" name="gender" />
          </label>
        </div>
      </div>
      <button onClick={handleClose}>leave meting</button>
    </div>
  );
};

export { Account };
