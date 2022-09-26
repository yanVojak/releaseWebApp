import React from "react";
import react, { ReactComponentElement, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface ISearchBoxProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

const SearchBox: React.FC<ISearchBoxProps> = ({ text, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        className="search"
        onChange={onChange}
        placeholder={"search"}
      />
    </div>
  );
};

export { SearchBox };
