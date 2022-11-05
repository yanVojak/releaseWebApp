import react, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

  const handleGo = useCallback(() => {
    navigate("/topics");
  }, [navigate]);

  const {
    setMainButtonOnClick,
    setMainButtonParams,
    setLoadingMainButton
  } = useTelegramMainButton(true, true, "set visible");

  useTgBackButton(false);


  const {t} = useTranslation();

  useEffect(() => {
    setMainButtonOnClick(handleGo)
  }, [handleGo, setMainButtonOnClick])


  return (
    <div className={styles.container}>
      <div>{window.Telegram.WebApp.initData}</div>
      <h2>{t('test')}</h2>
      <button onClick={handleGo}>go</button>
    </div>
  );
};

export { Account };
