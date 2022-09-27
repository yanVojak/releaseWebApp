import react, { useCallback, useEffect, useState } from "react";
import RadioItem  from "../RadioItem/RadioItem";

export interface ILevelListProps {
  onChangeLanguage?: (language: string) => void;
  onClose?: () => void;
}

export const LanguagePractice: React.FC<ILevelListProps> = ({
  onChangeLanguage,
  onClose
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

  useEffect(() => {
    setFilteredLanguages(
      languages.filter((item) =>
        item.trim().toLocaleLowerCase().includes(searchStringText)
      )
    );
  }, [searchStringText]);

  useEffect(() => {
    if(onChangeLanguage) {
      onChangeLanguage(currentLanguage);
    }
    setSearchStringText('');
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
        />
      ))}
    </div>
  );
};
