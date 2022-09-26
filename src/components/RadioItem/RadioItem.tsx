import React, { ChangeEvent, useCallback, useRef } from "react";
import react from "react";
import styles from "./styles.module.scss";

interface IRadioItemProps {
  radioGroupName: string;
  label: string;
  isSelected?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

const RadioItem: React.FC<IRadioItemProps> = ({
  radioGroupName,
  label,
  isSelected,
  onChange,
  onClick
}) => {

  return (
    <label htmlFor={label} className={styles.container} onClick={onClick}>
      <input
        onChange={onChange}
        type="radio"
        name={radioGroupName}
        id={label}
        value={label}
        checked={isSelected}
      />
      {label}
    </label>
  );
};

export { RadioItem };

