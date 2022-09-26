import react, { useCallback, useEffect, useState } from "react";
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
    </div>
  );
};
