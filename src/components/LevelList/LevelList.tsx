import React, { useCallback, useState } from "react";
import { useParams } from "react-router";
import RadioItem  from "../../components/RadioItem/RadioItem";


export const LevelList = () => {
  const levels = ["Beginer", "Pre-intemediate", "Intermediate"];
  const [currentLevel, setCurrentLevel] = useState(levels[1]);
  const {id} = useParams();
  console.log(id);
  

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentLevel(event.target.value);
    },
    [setCurrentLevel]
  );

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