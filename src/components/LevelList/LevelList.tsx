import react, { useCallback, useEffect, useState } from "react";
import RadioItem  from "../../components/RadioItem/RadioItem";

interface ILevelListProps {
  changeLevel: (level: string) => void;
}

export const LevelList: React.FC<ILevelListProps> = ({ changeLevel }) => {
  const levels = ["Beginer", "Pre-intemediate", "Intermediate"];
  const [currentLevel, setCurrentLevel] = useState(levels[1]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentLevel(event.target.value);
    },
    [setCurrentLevel]
  );

  useEffect(() => {
    changeLevel(currentLevel);
  }, [currentLevel, changeLevel]);

  return (
    <div>
      {levels.map((level) => (
        <RadioItem
          key={level}
          radioGroupName="languages"
          label={level}
          onChange={handleChange}
          isSelected={level === currentLevel}
        />
      ))}
    </div>
  );
};
