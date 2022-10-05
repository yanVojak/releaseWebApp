import React from "react";
import react, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import  RadioItem  from "../RadioItem/RadioItem";
import SearchBox  from "../SearchBox/SearchBox";

export const ChangePracticeLanguage = () => {
  const languages = ["English", "Spanish", "Belarussian"];
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [searchStringText, setSearchStringText] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(languages);
  const navigate = useNavigate();

  const changeLanguage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentLanguage(event.target.value);
    },
    [setCurrentLanguage]
  );

  const handleSearchString = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchStringText(e.target.value);
    },
    [setSearchStringText]
  );

  useEffect(() => {
    setSearchStringText("");
  }, [currentLanguage, setSearchStringText]);

  useEffect(() => {
    setFilteredLanguages(
      languages.filter((item) =>
        item.trim().toLowerCase().includes(searchStringText)
      )
    );
  }, [searchStringText]);


  useEffect(() => {
    if(currentLanguage) {
      window.Telegram.WebApp.MainButton.enable();
    }
  }, [currentLanguage])

  // const handleClose = useCallback(() => {
  //   navigate('/');
  // }, [])


  // useEffect(() => {
  //   window.Telegram.WebApp.BackButton.onClick(handleClose);
  // }, [handleClose]);

  // useEffect(() => {
  //   window.Telegram.WebApp.MainButton.onClick(handleSubmit);
  // }, [handleSubmit]);

  useEffect(() => {
    window.Telegram.WebApp.BackButton.show();
    window.Telegram.WebApp.MainButton.show();
  }, []);

  // useEffect(
  //   () => () => {
  //     window.Telegram.WebApp.BackButton.offClick(handleClose);
  //     window.Telegram.WebApp.MainButton.offClick(handleClose);
  //   },
  //   [handleClose]
  // );

  useEffect(
    () => () => {
      window.Telegram.WebApp.MainButton.hide();
      window.Telegram.WebApp.BackButton.hide();
    },
    []
  );

  return (
    <div>
      <h3>choose a language</h3>
      <SearchBox onChange={handleSearchString} value={searchStringText} />
      {filteredLanguages.map((lang) => (
        <RadioItem
          key={lang}
          radioGroupName="languages"
          label={lang}
          onChange={changeLanguage}
          isSelected={lang === currentLanguage}
        />
      ))}
    </div>
  );
};
