import React from "react";
import styles from "./styles.module.scss";

interface ISearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ value, onChange }) => {


  return (
    <div className={`${styles.container}`}>
      <input
      className={styles.input}
        value={value}
        type="text"
        onChange={onChange}
        placeholder={"search"}
      />
    </div>
  );
};

export default React.memo(SearchBox);