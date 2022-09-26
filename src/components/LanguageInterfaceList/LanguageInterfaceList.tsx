import react, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { RadioItem } from "../../components/RadioItem/RadioItem";

interface ILevelListProps {
  onChangeLanguage: (language: string) => void;
}

export const LanguagePracticeList: React.FC<ILevelListProps> = ({
  onChangeLanguage,
}) => {
  const languages = ["English", "Spanish", "Belarussian"];
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [searchStringText, setSearchStringText] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  const changeLanguage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentLanguage(event.target.value);
    },
    [setCurrentLanguage]
  );

  const handleClearSearchString = useCallback(() => {
    setSearchStringText("");
  }, [setSearchStringText]);

  useEffect(() => {
    setFilteredLanguages(
      languages.filter((item) =>
        item.trim().toLocaleLowerCase().includes(searchStringText)
      )
    );
  }, [searchStringText]);

  useEffect(() => {
    onChangeLanguage(currentLanguage);
  }, [currentLanguage]);

  const navigate = useNavigate();

  const handleOpenAccount = useCallback(() => {
    navigate("/account");
  }, [navigate]);

  useEffect(() => {
    window.Telegram.WebApp.BackButton.onClick(handleOpenAccount);
    window.Telegram.WebApp.BackButton.show();
  }, [handleOpenAccount]);

  useEffect(
    () => () => {
      window.Telegram.WebApp.BackButton.offClick(handleOpenAccount);
      window.Telegram.WebApp.BackButton.hide();
    },
    [handleOpenAccount]
  );
  return (
    <div>
      {filteredLanguages.map((lang) => (
        <RadioItem
          key={lang}
          radioGroupName="languages"
          label={lang}
          onChange={changeLanguage}
          isSelected={lang === currentLanguage}
          onClick={handleClearSearchString} 
        />
      ))}

      <button onClick={handleOpenAccount}>acc</button>
    </div>
  );
};
