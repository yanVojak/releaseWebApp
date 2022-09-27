import react, { useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  ILevelListProps,
  LanguagePractice,
} from "../PracticeLanguage/PracticeLanguage";
import styles from "./styles.module.scss";

const Account = () => {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    window.Telegram.WebApp.BackButton.onClick(handleBack);
  }, [handleBack]);

  useEffect(() => {
    window.Telegram.WebApp.BackButton.show();
  }, []);

  useEffect(
    () => () => {
      window.Telegram.WebApp.BackButton.offClick(handleBack);
    },
    [handleBack]
  );

  useEffect(
    () => () => {
      window.Telegram.WebApp.BackButton.hide();
    },
    []
  );

  const go = useCallback(() => {
    navigate("languages");
  }, []);

  const handleClose = useCallback(() => {
    let idTimout: ReturnType<typeof setTimeout>;


    idTimout = setTimeout(() => {
      window.Telegram.WebApp.close();
      console.log('test');
    }, 2000);
  }, []);

  // const tg = window.Telegram.WebApp;

  // const handleClose = useCallback(() => {
  //   navigate("/");
  // }, []);

  // const handleBack = useCallback(() => {
  //   navigate("/account");
  //   tg.MainButton.offClick(handleClose);
  //   tg.MainButton.offClick(handleBack);
  // }, []);

  // useEffect(() => {
  //   tg.BackButton.offClick(handleBack);
  //   tg.MainButton.offClick(handleBack);
  //   tg.BackButton.show();
  //   tg.MainButton.hide();
  //   tg.BackButton.onClick(handleClose);
  //   tg.expand();
  // }, []);

  // const handleChangeLanguage = useCallback(() => {
  //   tg.BackButton.offClick(handleClose);
  //   tg.BackButton.show();
  //   tg.MainButton.show();
  //   tg.BackButton.onClick(handleBack);
  //   tg.MainButton.onClick(handleBack);
  //   tg.expand();
  //   navigate("/languages");
  // }, []);

  // const handleChangeLevel = useCallback(() => {
  //   tg.BackButton.offClick(handleClose);
  //   tg.BackButton.show();
  //   tg.MainButton.show();
  //   tg.BackButton.onClick(handleBack);
  //   tg.MainButton.onClick(handleBack);
  //   tg.expand();
  //   navigate("/levels");
  // }, []);

  return (
    <div className={styles.container}>
      <h2>Account</h2>
      {/* <div className="item">
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
  </div> */}
      <button onClick={handleBack}>back</button>
      <button onClick={go}>go</button>
      <button onClick={handleClose}>
        <a href="https://www.google.com/" target="_blank">
          redirect and close
        </a>
      </button>
    </div>
  );
};

export { Account };
