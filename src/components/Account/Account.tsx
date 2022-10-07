import react, { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useTgBackButton from "../../hooks/useTgBackButton";
import useTelegramMainButton from "../../hooks/useTgMainButton";
import { CREATE_TOPICS_PATH } from "../../routing/routing.constants";
import {
  ILevelListProps,
  LanguagePractice,
} from "../PracticeLanguage/PracticeLanguage";
import styles from "./styles.module.scss";

const Account = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [test, setTest] = useState(9);

  const handleGo = useCallback(() => {
    navigate("/topics");
  }, [navigate, test]);

  // const {
  //   hideMainButton,
  //   showMainButton,
  //   enableMainButton,
  //   disabeleMainButton,
  //   setTextMainButton,
  //   setBackButtonOnClick
  // }: MainButtonType = useTelegramMainButton(false, false, "set visible");

  const {
    setMainButtonOnClick,
    setMainButtonParams,
    setLoadingMainButton
  } = useTelegramMainButton(false, false, "set visible");

  useTgBackButton(false);

  useEffect(() => {
    if(isVisible) {

      setMainButtonParams({is_visible: true, is_active: true, text: 'true'})
    } else {
      setMainButtonParams({is_visible: true, is_active: false, text: 'false'})
      // disabeleMainButton();
      // hideMainButton();
    }
  }, [isVisible])


  useEffect(() => {
    setMainButtonOnClick(handleGo)
  }, [handleGo, setMainButtonOnClick])
  // useEffect(() => {
  //   window.Telegram.WebApp.BackButton.onClick(handleBack);
  // }, [handleBack]);

  // useEffect(() => {
  //   window.Telegram.WebApp.BackButton.show();
  //   window.Telegram.WebApp.MainButton.show();
  //   window.Telegram.WebApp.MainButton.showProgress(true);
  // }, []);

  // useEffect(
  //   () => () => {
  //     window.Telegram.WebApp.BackButton.offClick(handleBack);
  //   },
  //   [handleBack]
  // );

  // useEffect(
  //   () => () => {
  //     window.Telegram.WebApp.BackButton.hide();
  //   },
  //   []
  // );

  // const go = useCallback(() => {
  //   navigate(CREATE_TOPICS_PATH);
  // }, []);

  // const handleClose = useCallback(() => {
  //   let idTimout: ReturnType<typeof setTimeout>;

  //   idTimout = setTimeout(() => {
  //     window.Telegram.WebApp.close();
  //     console.log('test');
  //   }, 2000);
  // }, []);

  // const [url, setUrl] = useState('');

  // useEffect(() => {
  //   setUrl(window.location.href)
  // }, [setUrl])

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
      <div>{window.Telegram.WebApp.initData}</div>
      <h2>Account</h2>
      <button onClick={() => setIsVisible((prev) => !prev )}>set visible</button>
      <button onClick={() =>setTest((prev) => prev + 1 )}> set test</button>
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
      <button onClick={handleGo}>go</button>
      {/* <button onClick={go}>go</button> */}
      {/* <button onClick={handleClose}> */}
        {/* <a href="https://www.google.com/" target="_blank"> */}
          {/* redirect and close */}
        {/* </a> */}
    </div>
  );
};

export { Account };
